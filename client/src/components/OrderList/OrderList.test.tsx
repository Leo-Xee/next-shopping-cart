import { render, screen } from "@/shared/utils/test-utils";
import OrderList from "./OrderList";

describe("<OrderList />", () => {
  it("주문의 리스트를 보여준다.", async () => {
    render(<OrderList />);

    const orderList = await screen.findAllByRole("listitem", { name: /주문/ });

    expect(orderList).not.toHaveLength(0);
  });
});
