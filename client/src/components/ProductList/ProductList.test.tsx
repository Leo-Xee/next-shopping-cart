import { render, screen } from "@/shared/utils/test-utils";
import ProductList from "./ProductList";

describe("<ProductList />", () => {
  it("상품의 리스트를 보여준다.", async () => {
    render(<ProductList />);

    const productList = await screen.findAllByRole("listitem");

    expect(productList).not.toHaveLength(0);
  });
});
