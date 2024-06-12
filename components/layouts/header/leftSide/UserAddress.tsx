import FlexContainer from "@/components/ui/FlexContainer";
import eg from "@/public/assets/flags/eg.svg";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const UserAddress: React.FC = () => {
  const t = useTranslations("Globals");

  return (
    <FlexContainer
      role="button"
      aria-label="User Address"
      fh
      align="center"
      className="UserAddressContainer"
    >
      <FlexContainer align="end" className="gap-x-2">
        <Image
          src={eg}
          alt="eg"
          width={40}
          height={40}
          className="rounded-md overflow-hidden"
        />
        <FlexContainer
          fh
          flex={1}
          flexDirection="col"
          justify="between"
          className="gap-y-1"
        >
          <Typography variant="body2" sx={{ lineHeight: 1, color: "white" }}>
            {t("dilveryTo")}
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1, color: "white" }}>
            {t("cairo")}
          </Typography>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default UserAddress;
