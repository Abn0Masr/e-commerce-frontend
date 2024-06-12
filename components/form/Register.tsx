"use client";

import React, { HTMLInputTypeAttribute, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import PasswordInput from "./PasswordInput";
import FlexContainer from "../ui/FlexContainer";
import ResError from "./ResError";
import SubmitButton from "./SubmitButton";

const schema = zod.object({
  firstName: zod.string().min(1, { message: "fieldReqired" }),
  lastName: zod.string().min(1, { message: "fieldReqired" }),
  userName: zod.string().min(4, { message: "fieldReqired" }),
  email: zod.string().email({ message: "emailInvalid" }),
  password: zod.string().min(1, { message: "fieldReqired" }),
});

type Schema = zod.infer<typeof schema>;

type FieldOptions = {
  autoComplete: string;
  type?: HTMLInputTypeAttribute;
};

const fields: Record<keyof Schema, FieldOptions> = {
  firstName: { autoComplete: "given-name", type: "text" },
  lastName: { autoComplete: "family-name", type: "text" },
  userName: { autoComplete: "username", type: "text" },
  email: { autoComplete: "email", type: "email" },
  password: { autoComplete: "new-password" },
};

const Register: React.FC = () => {
  const t = useTranslations();

  const router = useRouter();

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Schema) => {
    try {
      setIsPending(true);
      setFetchError(null);
      await axios.post(process.env.REGISTER_URL || "", data);
      reset();
      router.push(`/login?registered="success"`);
    } catch (err) {
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
      fw
      flexDirection="col"
      align="center"
      justify="center"
      className="gap-y-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FlexContainer fw flexDirection="col" className="gap-y-4">
        {Object.entries(fields).map(([key, value]) => {
          const field = key as keyof Schema;
          const errMsg = errors[key as keyof Schema]?.message;
          const isErr = !!errMsg;

          return field === "password" ? (
            <PasswordInput
              fullWidth
              key={key}
              required
              {...register("password")}
              autoComplete={value.autoComplete}
              disabled={isPending}
              error={isErr}
              helperText={isErr && t(`Errors.${errMsg}`)}
            />
          ) : (
            <TextField
              fullWidth
              key={key}
              required
              {...register(key as keyof Schema)}
              {...value}
              label={t(`Globals.${key}`)}
              disabled={isPending}
              error={isErr}
              helperText={isErr && t(`Errors.${errMsg}`)}
            />
          );
        })}
      </FlexContainer>
      {fetchError && <ResError message={fetchError} />}
      <SubmitButton loading={isPending} />
    </FlexContainer>
  );
};

export default Register;
