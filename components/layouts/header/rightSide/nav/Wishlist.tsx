import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Wishlist: React.FC = () => {
  const t = useTranslations("Globals");
  return (
    <Link href={"/wishlist"} id="wishlist-link" className="WishlistLink">
      {t("wishlist")}
    </Link>
  );
};

export default Wishlist;
