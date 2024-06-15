"use client";

import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch } from "@/redux/hooks";
import { openDrawer } from "@/redux/slices/drawerSlice";

const MenuButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(openDrawer("menu"));

  return (
    <button onClick={handleClick} id="menu-button" className="MenuButton">
      <span className="label">Menu</span>
      <FontAwesomeIcon className="text-[1.75rem]" icon={faBars} />
    </button>
  );
};

export default MenuButton;
