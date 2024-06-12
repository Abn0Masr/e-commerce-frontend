import Login from "@/components/form/Login";
import ServicesAuth from "@/components/layouts/auth/ServicesAuth";
import Header from "@/components/layouts/auth/Header";
import FlexContainer from "@/components/ui/FlexContainer";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Divider from "@/components/layouts/auth/Divider";

const LoginPage = () => {
  const t = useTranslations();

  return (
    <FlexContainer
      fw
      flexDirection="col"
      align="center"
      className="LoginContainer"
    >
      <Header
        title={t("pages.auth.login.welcomeTitle")}
        description={t("pages.auth.login.welcomeDescription")}
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
        <Login />
      </FlexContainer>
      <Typography variant="body1" component={"span"} className="text-secondary">
        {t("Globals.don'tHaveAccount")}{" "}
        <Link href={"/register"} className="underline">
          {t("Globals.sign-up")}
        </Link>
      </Typography>
    </FlexContainer>
  );
};

export default LoginPage;
