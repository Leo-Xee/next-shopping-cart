import { render, screen } from "@/shared/utils/test-utils";
import PurchaseList from "./PurchaseList";

describe("<PurchaseList />", () => {
  it("카트상품 중에 체크한 상품의 리스트를 보여준다.", async () => {
    render(<PurchaseList />);

    const purchaseList = await screen.findAllByRole("listitem");

    expect(purchaseList).not.toHaveLength(0);
  });
});
