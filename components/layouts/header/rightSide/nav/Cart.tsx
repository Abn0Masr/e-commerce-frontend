"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@mui/material";
import Link from "next/link";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { colors } from "@/theme";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { useTranslations } from "next-intl";

const Cart: React.FC = () => {
  const { length, isLoading } = useAppSelector((state) => state.cart);

  const t = useTranslations("Globals");

  return (
    <Link href={"/cart"} id="cart-link" className="CartLink">
      <span className="label">{t("cart")}</span>
      <Badge
        badgeContent={length}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: colors.secondary,
            color: colors.white,
            opacity: isLoading ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
          },
        }}
      >
        <FontAwesomeIcon className="text-[1.75rem]" icon={faShoppingCart} />
      </Badge>
    </Link>
  );
};

export default Cart;
