import Header from "@/components/layouts/header/Header";
import FlexContainer from "@/components/ui/FlexContainer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <FlexContainer
        component={"main"}
        fw
        justify="start"
        align="start"
        flex={1}
        flexDirection="col"
        className="MaxWS-2xl MarginCenter-X"
      >
        {children}
      </FlexContainer>
    </>
  );
};

export default AppLayout;
