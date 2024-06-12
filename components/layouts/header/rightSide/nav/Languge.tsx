"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Languge = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const [, , ...paths] = pathname.split("/");
    router.push(`/${newLocale}/${paths.join("/")}`);
  };

  return (
    <button onClick={handleClick} className="LanguageButton">
      {locale === "ar" ? "English" : "العربية"}
    </button>
  );
};

export default Languge;
