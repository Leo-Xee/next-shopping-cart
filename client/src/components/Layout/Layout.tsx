import styled from "@emotion/styled";
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  margin: 0 auto;
  padding: 120px 0;
  max-width: ${({ theme }) => theme.light.maxWidth};
  min-width: ${({ theme }) => theme.light.minWidth};
`;

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
