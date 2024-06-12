import React from "react";
import FlexContainer from "@/components/ui/FlexContainer";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const MobileWelcomeMessage: React.FC = () => {
  const t = useTranslations("pages");

  return (
    <FlexContainer
      flexDirection="col"
      align="center"
      justify="center"
      className="MobileWelcomeMessage"
    >
      <Typography variant="h6" component={"h1"} className="text-white">
        {t("auth.welcomeTitle")}
      </Typography>
      <Typography variant="body2" component={"p"} className="text-white">
        {t("auth.welcomeDescription")}
      </Typography>
    </FlexContainer>
  );
};

export default MobileWelcomeMessage;
