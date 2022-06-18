import { ThemeProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "@/styles/theme";

function AllTheProviders({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <ThemeProvider theme={theme.light}>
      <QueryClientProvider client={queryClient}>
        <div id="portal" />
        {children}
      </QueryClientProvider>
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
