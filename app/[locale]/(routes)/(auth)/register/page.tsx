import Register from "@/components/form/Register";
import Divider from "@/components/layouts/auth/Divider";
import Header from "@/components/layouts/auth/Header";
import ServicesAuth from "@/components/layouts/auth/ServicesAuth";
import FlexContainer from "@/components/ui/FlexContainer";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";

const RegisterPage = () => {
  const t = useTranslations("");

  return (
    <FlexContainer
      fw
      flexDirection="col"
      align="center"
      className="RegisterContainer"
    >
      <Header
        title={t("pages.auth.register.welcomeTitle")}
        description={t("pages.auth.register.welcomeDescription")}
      />
      <FlexContainer
        fw
        flexDirection="col"
        align="center"
        justify="center"
        className="gap-y-2"
      >
        <ServicesAuth />
        <Divider />
        <Register />
      </FlexContainer>
      <Typography variant="body1" component={"span"} className="text-secondary">
        {t("Globals.haveAccount")}{" "}
        <Link href={"/login"} className="underline">
          {t("Globals.sign-in")}
        </Link>
      </Typography>
    </FlexContainer>
  );
};

export default RegisterPage;
