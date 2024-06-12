import React from "react";
import "@/styles/header.scss";
import FlexContainer from "@/components/ui/FlexContainer";
import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import SearchBar from "./search/SearchBar";

const Header: React.FC = () => {
  return (
    <FlexContainer
      component={"header"}
      aria-level={1}
      aria-label="Header contains navigation and user information"
      fw
      className="HeaderBase"
    >
      <FlexContainer fw fh align="center" justify="between">
        <LeftSide />
        <SearchBar />
        <RightSide />
      </FlexContainer>
    </FlexContainer>
  );
};

export default Header;
