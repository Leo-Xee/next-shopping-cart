import Header from "./Header";
import { render, screen } from "@/shared/utils/test-utils";

describe("<Header />", () => {
  it("로고, 장바구니, 주문목록을 보여준다.", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", { name: "WOOWA SHOP" });
    const cartLink = screen.getByRole("link", { name: "장바구니" });
    const orderLink = screen.getByRole("link", { name: "주문목록" });

    expect(homeLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
    expect(orderLink).toBeInTheDocument();
  });

  describe("버튼을 클릭하면 다른 페이지로 이동한다.", () => {
    it("로고를 클릭하면 '/'로 이동한다.", () => {
      render(<Header />);
      const homeLink = screen.getByRole("link", { name: /WOOWA SHOP/ });

      expect(homeLink).toHaveAttribute("href", "/");
    });

    it("장바구니를 클릭하면 '/cart'로 이동한다.", () => {
      render(<Header />);
      const cartLink = screen.getByRole("link", { name: /장바구니/ });

      expect(cartLink).toHaveAttribute("href", "/carts");
    });

    it("주문목록를 클릭하면 '/orders'로 이동한다.", () => {
      render(<Header />);
      const orderLink = screen.getByRole("link", { name: /주문목록/ });

      expect(orderLink).toHaveAttribute("href", "/orders");
    });
  });
});
