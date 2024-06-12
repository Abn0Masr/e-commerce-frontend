import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const SubmitButton: React.FC<{ loading: boolean }> = ({ loading = false }) => {
  const t = useTranslations("Globals");
  return (
    <Button
      fullWidth
      sx={{ justifyContent: "center" }}
      disabled={loading}
      type="submit"
    >
      {loading ? t("loading") : t("confirm")}
    </Button>
  );
};

export default SubmitButton;
