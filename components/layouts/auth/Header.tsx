import FlexContainer from "@/components/ui/FlexContainer";
import { colors } from "@/theme";
import { Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <FlexContainer fw flexDirection="col"  align="center" className="text-center">
      <Typography
        variant="h5"
        component={"h2"}
        sx={{ color: colors.secondary }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        component={"p"}
        sx={{ color: colors.secondary }}
      >
        {description}
      </Typography>
    </FlexContainer>
  );
};

export default Header;
