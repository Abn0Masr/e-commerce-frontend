import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/logo.jpeg";

const Banner: React.FC = () => {
  return (
    <Link
      role="banner"
      aria-label="Brand banner"
      aria-current="page"
      href={"/"}
      className="Banner"
    >
      <Image src={logo} alt="brand-logo" fill />
    </Link>
  );
};

export default Banner;
