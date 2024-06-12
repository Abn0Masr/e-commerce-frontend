import QueryProvider from "@/components/providers/QueryProvider";
import StoreProvider from "@/components/providers/StoreProvider";
import UserProvider from "@/components/providers/UserProvider";
import FlexContainer from "@/components/ui/FlexContainer";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <QueryProvider>
        <UserProvider>
          <div id="root" style={{ height: "100%", display: "flex" }}>
            <FlexContainer
              fw
              flexDirection="col"
              flex={1}
              align="stretch"
              justify="start"
            >
              {children}
            </FlexContainer>
          </div>
        </UserProvider>
      </QueryProvider>
    </StoreProvider>
  );
};

export default RoutesLayout;
