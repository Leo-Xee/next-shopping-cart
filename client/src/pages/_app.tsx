import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "@/styles/GobalStyle";
import theme from "@/styles/theme";
import Layout from "@/components/Layout";
import initMockAPI from "@/mocks";
import { wrapper } from "@/app/store";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
