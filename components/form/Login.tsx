"use client";

import React, { useState } from "react";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Typography } from "@mui/material";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "@/redux/hooks";
import { useTranslations } from "next-intl";
import FlexContainer from "../ui/FlexContainer";
import { colors } from "@/theme";
import PasswordInput from "./PasswordInput";
import ResError from "./ResError";
import SubmitButton from "./SubmitButton";
import ResetPasswordLink from "./ResetPasswordLink";
import { login } from "@/redux/slices/authSlice";

const schema = zod.object({
  email: zod.string().email({ message: "emailInvalid" }),
  password: zod.string().min(1, { message: "fieldReqired" }),
  remember_me: zod.boolean().default(false),
});

type Schema = zod.infer<typeof schema>;

const Login = () => {
  const t = useTranslations();

  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useAppDispatch();

  const redirect = params.get("redirect") ?? "/";

  const [isPending, setIsPending] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  const onSubmit = async (data: Schema) => {
    try {
      setIsPending(true);
      setFetchError(null);
      await axios.post(process.env.LOGIN_URL || "", data, {
        withCredentials: true,
      });
      reset();
      await dispatch(login(data));
      router.push(redirect);
    } catch (err: any) {
      const axiosError = err as AxiosError;
      const message = axiosError.response?.data || "Connection error";
      setFetchError(message as string);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <FlexContainer
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      fw
      flexDirection="col"
      align="center"
      justify="center"
      className="gap-y-2"
    >
      <FlexContainer fw flexDirection="col" className="gap-y-4">
        <TextField
          fullWidth
          {...register("email")}
          label={t("Globals.email")}
          type="email"
          autoComplete="email"
          disabled={isPending}
          error={!!errors.email?.message}
          helperText={
            !!errors.email?.message && t(`Errors.${errors.email?.message}`)
          }
        />
        <PasswordInput
          fullWidth
          {...register("password")}
          autoComplete="current-password"
          disabled={isPending}
          error={!!errors.password?.message}
          helperText={
            !!errors.password?.message &&
            t(`Errors.${errors.password?.message}`)
          }
        />
      </FlexContainer>
      <FlexContainer fw align="center" justify="between">
        <ResetPasswordLink />
        <FormControlLabel
          control={
            <Checkbox
              disableRipple
              sx={{ padding: "0" }}
              size="small"
              color="success"
              {...register("remember_me")}
            />
          }
          label={
            <Typography variant="body2" sx={{ color: colors.secondary }}>
              {t("Globals.rememberMe")}
            </Typography>
          }
          sx={{ marginRight: 0, columnGap: "4px" }}
        />
      </FlexContainer>
      {fetchError && <ResError message={fetchError} />}
      <SubmitButton loading={isPending} />
    </FlexContainer>
  );
};

export default Login;
