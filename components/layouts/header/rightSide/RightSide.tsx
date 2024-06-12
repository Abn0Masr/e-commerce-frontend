import FlexContainer from "@/components/ui/FlexContainer";
import React from "react";
import Nav from "./nav/nav";

const RightSide: React.FC = () => {
  return (
    <FlexContainer aria-label="Right side of header contains navigations and user info">
      <Nav />
    </FlexContainer>
  );
};

export default RightSide;
