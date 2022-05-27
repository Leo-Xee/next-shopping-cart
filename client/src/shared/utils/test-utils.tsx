import { ThemeProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "@/styles/theme";

const queryClient = new QueryClient();

function AllTheProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
