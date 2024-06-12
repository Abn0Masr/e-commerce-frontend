"use client";

import FlexContainer from "@/components/ui/FlexContainer";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();
  const pathName = usePathname();
  const t = useTranslations("Globals");

  return (
    <FlexContainer className="lg-ifh gap-x-2">
      <Button onClick={() => router.push(`/login?redirect=${pathName}`)}>
        {t("sign-in")}
      </Button>
      <Button onClick={() => router.push("/register")}>{t("sign-up")}</Button>
    </FlexContainer>
  );
};

export default Auth;
