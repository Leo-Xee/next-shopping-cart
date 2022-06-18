import { render, screen, fireEvent, waitFor } from "@/shared/utils/test-utils";
import CartList from "./CartList";

describe("<CartList />", () => {
  it("카트의 리스트를 보여준다", async () => {
    render(<CartList />);

    const cartList = await screen.findAllByRole("listitem");

    expect(cartList).not.toHaveLength(0);
  });

  describe("'전체 선택' 체크박스를 클릭하면", () => {
    it("모든 체크박스가 체크되고 라벨이 '전체 해제'로 변경되고 한번 더 클릭하면 모든 체크박스가 해제되고 라벨이 '전체 선택'으로 변경된다.", async () => {
      render(<CartList />);

      const checkboxAll: HTMLInputElement = await screen.findByLabelText(/전체 체크/);
      const checkboxItems: HTMLInputElement[] = await screen.findAllByLabelText(/상품 체크/);

      fireEvent.click(checkboxAll);
      await waitFor(() => expect(checkboxAll.checked).toBe(true));

      checkboxItems.forEach((checkbox) => expect(checkbox.checked).toEqual(true));
      expect(screen.getByText(/전체 해제/)).toBeInTheDocument();

      fireEvent.click(checkboxAll);
      await waitFor(() => expect(checkboxAll.checked).toBe(false));

      checkboxItems.forEach((checkbox) => expect(checkbox.checked).toEqual(false));
      expect(screen.getByText(/전체 선택/)).toBeInTheDocument();
    });
  });

  describe("체크된 체크박스가 하나도 없으면", () => {
    it("'상품 삭제' 버튼과 주문하기버튼이 `disabled`된다.", async () => {
      render(<CartList />);

      const checkboxAll: HTMLInputElement = await screen.findByLabelText(/전체 체크/);
      const cartButton = await screen.findByRole("button", { name: /주문하기/ });
      const deleteButton = await screen.findByRole("button", { name: "상품 삭제" });

      fireEvent.click(checkboxAll);
      await waitFor(() => expect(checkboxAll.checked).toBe(true));

      fireEvent.click(checkboxAll);
      await waitFor(() => expect(checkboxAll.checked).toBe(false));

      expect(cartButton).toBeDisabled();
      expect(deleteButton).toBeDisabled();
    });
  });

  it("카트의 수량증가 버튼(+)을 클릭하면 수량이 변경된다.", async () => {
    render(<CartList />);

    // 첫 번째 수량 증가 버튼을 쿼리, 클릭
    const plusButtons = await screen.findAllByRole("button", { name: "+" });
    const Quntities = await screen.findAllByLabelText(/수량/);
    const previousQuantity = Quntities[0].textContent;

    fireEvent.click(plusButtons[0]);

    // 수량이 이전값이 아닐 때 까지 wait
    await waitFor(async () => {
      const newQuntities = await screen.findAllByLabelText(/수량/);
      const newQuantity = newQuntities[0].textContent;
      expect(Number(newQuantity)).not.toBe(Number(previousQuantity));
    });

    // 수량이 +1인지 확인
    const newestQuntities = await screen.findAllByLabelText(/수량/);
    expect(Number(newestQuntities[0].textContent)).toBe(Number(previousQuantity) + 1);
  });

  it("카트의 수량감소 버튼(-)를 클릭하면 수량이 변경된다.", async () => {
    render(<CartList />);

    // 첫 번째 수량 증가 버튼을 쿼리, 클릭
    const plusButtons = await screen.findAllByRole("button", { name: "-" });
    const Quntities = await screen.findAllByLabelText(/수량/);
    const previousQuantity = Quntities[0].textContent;

    fireEvent.click(plusButtons[0]);

    // 수량이 이전값이 아닐 때 까지 wait
    await waitFor(async () => {
      const newQuntities = await screen.findAllByLabelText(/수량/);
      const newQuantity = newQuntities[0].textContent;
      expect(newQuantity).not.toEqual(previousQuantity);
    });

    // 수량이 -1인지 확인
    const newestQuntities = await screen.findAllByLabelText(/수량/);
    expect(Number(newestQuntities[0].textContent)).toBe(Number(previousQuantity) - 1);
  });

  it("1개의 카트를 체크하고 '상품 삭제' 버튼을 클릭하면 해당 카트가 삭제된다.", async () => {
    render(<CartList />);

    const checkboxItems: HTMLInputElement[] = await screen.findAllByLabelText(/상품 체크/);
    const deleteButton = await screen.findByRole("button", { name: "상품 삭제" });
    const cartList = await screen.findAllByRole("listitem");

    // 첫 번째 상품 체크 박스를 클릭하고 체크완료까지 wait
    fireEvent.click(checkboxItems[0]);
    await waitFor(() => expect(checkboxItems[0].checked).toBe(true));

    // 상품 삭제 버튼 클릭하고 이전 카트리스트의 길이가 아닐때 까지 wait
    fireEvent.click(deleteButton);
    await waitFor(async () => {
      const newCartList = await screen.findAllByRole("listitem");
      expect(newCartList.length).not.toEqual(cartList.length);
    });

    // 이전 카트리스트 길이의 -1인지 확인
    const newestCartList = await screen.findAllByRole("listitem");
    expect(newestCartList.length).toBe(cartList.length - 1);
  });
});
