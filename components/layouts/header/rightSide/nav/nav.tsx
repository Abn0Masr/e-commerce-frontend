import React from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import FlexContainer from "@/components/ui/FlexContainer";
import Orders from "./Orders";
import Languge from "./Languge";
import User from "../user/User";
import MenuButton from "./MenuButton";

const Nav: React.FC = () => {
  return (
    <FlexContainer
      component={"nav"}
      role="navigation"
      align="end"
      justify="center"
      className="NavContainer"
    >
      <Languge />
      <Wishlist />
      <Orders />
      <Cart />
      <MenuButton />
      <User />
    </FlexContainer>
  );
};

export default Nav;
