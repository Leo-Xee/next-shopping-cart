import { Cart } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import { render } from "@/shared/utils/test-utils";
import PurchaseItem from "./PurchaseItem";

const cartItem: Cart = {
  id: 1,
  product: {
    id: 1,
    name: "냉면용기(대)",
    price: 83700,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
    quantity: 3,
    selected: false,
  },
};

const renderPurchaseItem = (cart: Cart) => {
  const result = render(<PurchaseItem cartItem={cart} />);

  const image = result.getByRole("img", { name: `${cart.product.name}` });
  const name = result.getByLabelText(/상품명/);
  const price = result.getByText(
    `${filterPrice(cart.product.price * cart.product.quantity)} 원 / ${cart.product.quantity} 개`,
  );

  return { image, name, price };
};

describe("<PurchaseItem />", () => {
  it("카트상품들 중에 체크한 상품들의 정보를 보여준다.", () => {
    const { image, name, price } = renderPurchaseItem(cartItem);

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
