import { ThemeProvider } from "@emotion/react";
import { ReactElement, ReactNode } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import theme from "@/styles/theme";
import { rootReducer } from "@/app/store";

function render(
  ui: ReactElement,
  { store = configureStore({ reducer: rootReducer }), ...renderOpions } = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOpions });
}

export * from "@testing-library/react";
export { render };
