import { Product } from "@/@types/dto";
import { filterName, filterPrice } from "@/shared/utils/filter";
import { render, screen } from "@/shared/utils/test-utils";
import ProductsList from "./ProductList";

const renderProducts = async (product: Omit<Product, "id" | "imageUrl">) => {
  const result = render(<ProductsList />);

  const name = await screen.findByText(`${filterName(product.name)}`);
  const price = await screen.findByText(`${filterPrice(product.price)}원`);
  const image = await screen.findByRole("img", { name: product.name });
  const button = await screen.findByRole("button", {
    name: `${product.name} 장바구니에 담기`,
  });

  return { result, name, price, image, button };
};

describe("<ProductList />", () => {
  it("상품의 리스트를 보여준다.", async () => {
    const { name, price, image, button } = await renderProducts({
      name: "냉면용기(대)",
      price: 83700,
    });

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
