import React from "react";
import { colors } from "@/theme";
import { Divider as MuiDivider } from "@mui/material";
import { useTranslations } from "next-intl";

const Divider: React.FC = () => {
  const t = useTranslations("Globals");
  return (
    <MuiDivider
      sx={{
        "&:after": { borderColor: colors.secondary },
        "&:before": { borderColor: colors.secondary },
        width: "100%",
        color: colors.secondary,
      }}
    >
      {t("or")}
    </MuiDivider>
  );
};

export default Divider;
