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
    const firstProduct = await renderProducts({
      name: "냉면용기(대)",
      price: 83700,
    });

    expect(firstProduct.name).toBeInTheDocument();
    expect(firstProduct.price).toBeInTheDocument();
    expect(firstProduct.image).toBeInTheDocument();
    expect(firstProduct.button).toBeInTheDocument();

    const secondProduct = await renderProducts({
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
    });

    expect(secondProduct.name).toBeInTheDocument();
    expect(secondProduct.price).toBeInTheDocument();
    expect(secondProduct.image).toBeInTheDocument();
    expect(secondProduct.button).toBeInTheDocument();
  });
});
