import { RouterContext } from "next/dist/shared/lib/router-context";
import userEvent from "@testing-library/user-event";
import React from "react";
import createMockRouter from "@/test-utils/createMockRouter";
import Header from "./Header";
import { render, screen } from "@/test-utils/custom";

describe("<Header />", () => {
  it("로고, 장바구니, 주문목록을 보여준다.", () => {
    render(<Header />);

    const title = screen.getByText(/WOOWA SHOP/i);
    const cart = screen.getByText("장바구니");
    const order = screen.getByText("주문목록");

    expect(title).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
    expect(order).toBeInTheDocument();
  });

  describe("Routing", () => {
    beforeEach(() => {
      const router = createMockRouter({});
      render(
        <RouterContext.Provider value={router}>
          <Header />
        </RouterContext.Provider>
      );
    });

    it("로고를 클릭하면 '/'로 페이지 이동한다.", async () => {
      const title = screen.getByText(/WOOWA SHOP/i);

      await userEvent.click(title);
      expect(title).toHaveAttribute("href", "/");
    });

    it("장바구니를 클릭하면 '/cart'로 페이지 이동한다.", async () => {
      const cart = screen.getByText("장바구니");

      await userEvent.click(cart);
      expect(cart).toHaveAttribute("href", "/cart");
    });

    it("주문목록를 클릭하면 '/order'로 페이지 이동한다.", async () => {
      const order = screen.getByText("주문목록");

      await userEvent.click(order);
      expect(order).toHaveAttribute("href", "/order");
    });
  });
});
