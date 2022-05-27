import { ThemeProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import theme from "@/styles/theme";
import { makeStore } from "@/app/store";

function AllTheProviders({ children }: { children: ReactNode }) {
  return (
    <Provider store={makeStore()}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
