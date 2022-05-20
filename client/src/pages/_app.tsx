import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/app/store";
import GlobalStyle from "@/styles/GobalStyle";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
