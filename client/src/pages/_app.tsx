import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider, QueryClient, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import GlobalStyle from "@/styles/GobalStyle";
import theme from "@/styles/theme";
import Layout from "@/components/Layout";
import initMockAPI from "@/mocks";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
