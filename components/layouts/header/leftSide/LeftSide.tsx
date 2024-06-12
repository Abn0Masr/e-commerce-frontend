import FlexContainer from "@/components/ui/FlexContainer";
import Banner from "./Banner";
import UserAddress from "./UserAddress";
import React from "react";

const LeftSide: React.FC = () => {
  return (
    <FlexContainer
      aria-label="Left side of header contain brand banner"
      fh
      className="HeaderLeftSide"
    >
      <Banner />
      <UserAddress />
    </FlexContainer>
  );
};

export default LeftSide;
