import { RouterContext } from "next/dist/shared/lib/router-context";
import userEvent from "@testing-library/user-event";
import { NextRouter } from "next/router";
import createMockRouter from "@/utils/createMockRouter";
import Header from "./Header";
import { render } from "@/utils/test-utils";

const renderHeader = (mockedRouter: NextRouter) => {
  const result = render(
    <RouterContext.Provider value={mockedRouter}>
      <Header />
    </RouterContext.Provider>
  );

  const homeButton = () => result.getByRole("button", { name: "WOOWA SHOP" });
  const cartButton = () => result.getByRole("button", { name: "장바구니" });
  const orderButton = () => result.getByRole("button", { name: "주문목록" });

  return { homeButton, cartButton, orderButton };
};

describe("<Header />", () => {
  it("로고, 장바구니, 주문목록을 보여준다.", () => {
    const router = createMockRouter({});
    const { homeButton, cartButton, orderButton } = renderHeader(router);

    expect(homeButton()).toBeInTheDocument();
    expect(cartButton()).toBeInTheDocument();
    expect(orderButton()).toBeInTheDocument();
  });

  describe("버튼을 클릭하면 다른 페이지로 이동한다.", () => {
    it("로고를 클릭하면 '/'로 이동한다.", async () => {
      const router = createMockRouter({});
      const { homeButton } = renderHeader(router);

      await userEvent.click(homeButton());
      expect(router.push).toHaveBeenCalledWith("/");
    });

    it("장바구니를 클릭하면 '/cart'로 이동한다.", async () => {
      const router = createMockRouter({});
      const { cartButton } = renderHeader(router);

      await userEvent.click(cartButton());
      expect(router.push).toHaveBeenCalledWith("/cart");
    });

    it("주문목록를 클릭하면 '/order'로 이동한다.", async () => {
      const router = createMockRouter({});
      const { orderButton } = renderHeader(router);

      await userEvent.click(orderButton());
      expect(router.push).toHaveBeenCalledWith("/order");
    });
  });
});
