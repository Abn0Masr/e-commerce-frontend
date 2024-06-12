"use client";

import React, { memo, useState } from "react";
import { BaseTextFieldProps, IconButton, TextField } from "@mui/material";
import { useTranslations } from "next-intl";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordInputProps extends BaseTextFieldProps {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const t = useTranslations("Globals");

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((prev) => !prev);

    return (
      <TextField
        ref={ref}
        {...props}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
        type={showPassword ? "text" : "password"}
        label={t("password")}
      />
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default memo(PasswordInput);
