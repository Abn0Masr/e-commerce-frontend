"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {Button} from "@mui/material";
import { Typography } from "@mui/material";
import FlexContainer from "@/components/ui/FlexContainer";
import React, { MouseEventHandler } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslations } from "next-intl";

type ServiceButtonType = {
  label: string;
  icon: IconProp;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const ServiceButton: React.FC<ServiceButtonType> = ({
  label,
  icon,
  ...props
}) => (
  <Button
    fullWidth
    type="button"
    startIcon={<FontAwesomeIcon icon={icon} />}
    sx={{ justifyContent: "center" }}
    {...props}
  >
    <Typography component={"span"}>{label}</Typography>
  </Button>
);

const ServicesAuth: React.FC = () => {
  const t = useTranslations("Globals");

  return (
    <FlexContainer fw flexDirection="col" className="inline-flex gap-y-2">
      <ServiceButton label={t("google")} icon={faGoogle} />
      <ServiceButton label={t("github")} icon={faGithub} />
    </FlexContainer>
  );
};

export default ServicesAuth;
