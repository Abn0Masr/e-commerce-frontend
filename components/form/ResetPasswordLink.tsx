import React from "react";
import { colors } from "@/theme";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

const ResetPasswordLink: React.FC = () => {
  const t = useTranslations("Globals");
  return (
    <Link href={"/reset-password"}>
      <Typography variant="body2" sx={{ color: colors.secondary }}>
        {t("forgotPassword")}
      </Typography>
    </Link>
  );
};

export default ResetPasswordLink;
