"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MenuButton: React.FC = () => {
  return (
    <button className="MenuButton">
      <span className="label">Menu</span>
      <FontAwesomeIcon className="text-[1.75rem]" icon={faBars} />
    </button>
  );
};

export default MenuButton;
