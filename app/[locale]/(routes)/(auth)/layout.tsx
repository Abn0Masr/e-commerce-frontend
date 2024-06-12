import MobileWelcomeMessage from "@/components/layouts/auth/MobileWelcomeMessage";
import SideSlider from "@/components/layouts/auth/SideSlider";
import FlexContainer from "@/components/ui/FlexContainer";
import "@/styles/auth.scss";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FlexContainer
      fh
      fw
      flexDirection="col"
      align="center"
      className="AuthContainer"
    >
      <FlexContainer fw align="center" justify="center" className="AuthSide">
        <MobileWelcomeMessage />
        <SideSlider />
      </FlexContainer>
      <FlexContainer
        component={"main"}
        fw
        flex={1}
        flexDirection="col"
        align="center"
        className="AuthMain"
      >
        <FlexContainer fw className="MarginCenter-Y max-w-[375px]">
          {children}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default AuthLayout;
