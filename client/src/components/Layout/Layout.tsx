import styled from "@emotion/styled";
import Header from "../Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  margin: 0 auto;
  padding: 120px 20px;
  max-width: ${({ theme }) => theme.maxWidth};
  min-width: ${({ theme }) => theme.minWidth};
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
