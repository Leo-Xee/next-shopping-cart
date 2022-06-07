import { RouterContext } from "next/dist/shared/lib/router-context";
import createMockRouter from "@/shared/utils/createMockRouter";
import { render, screen, fireEvent } from "@/shared/utils/test-utils";
import CartList from "./CartList";

describe("<CartList />", () => {
  it("카트의 리스트를 보여준다", async () => {
    render(<CartList />);

    const cartList = await screen.findAllByRole("listitem");
    expect(cartList).not.toHaveLength(0);
  });

  describe("전체선택 체크박스를 클릭하면", () => {
    it.todo("모든 카트들의 체크박스가 체크된다.");
    it.todo("전체선택 체크박스의 라벨이 '전체해제'로 변경된다.");
  });

  describe("전체해제 체크박스를 클릭하면", () => {
    it.todo("모든 카트들의 체크박스가 해제된다.");
    it.todo("전체해제 체크박스의 라벨이 '전체선택'으로 변경된다.");
  });

  it.todo("다수의 카트를 체크하고 상품삭제 버튼을 클릭하면 체크한 카트가 삭제된다.");

  it.todo("카트의 수량증가 버튼(+)을 클릭하면 수량과 합계가 변경된다.");

  it.todo("카트의 수량감소 버튼(-)를 클릭하면 수량과 합계가 변경된다.");

  it.todo("카트의 개별상품 삭제 버튼을 클릭하면 해당 카트가 삭제된다.");

  describe("체크한 카트가 없으면", () => {
    it.todo("상품삭제 버튼이 비활성화된다.");

    it.todo("주문하기 버튼이 비활성화된다.");
  });

  it("주문하기 버튼을 클릭하면 결제 페이지로 이동한다.", async () => {
    const router = createMockRouter({});
    render(
      <RouterContext.Provider value={router}>
        <CartList />
      </RouterContext.Provider>,
    );

    const orderButton = await screen.findByRole("button", { name: /주문하기/ });

    fireEvent.click(orderButton);

    expect(router.push).toHaveBeenCalledWith("/purchase");
  });
});
