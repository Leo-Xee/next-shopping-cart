import { Cart } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import { render } from "@/shared/utils/test-utils";
import CartItem from "./CartItem";

const cartItem = {
  id: 1,
  product: {
    id: 1,
    name: "냉면용기(대)",
    price: 83700,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
    quantity: 10,
    selected: false,
  },
};

const renderCartItem = (cart: Cart) => {
  const result = render(<CartItem cartItem={cartItem} />);

  const image = () => result.getByRole("img", { name: `${cart.product.name}` });
  const name = () => result.getByText(cart.product.name);
  const price = () =>
    result.getByText(`${filterPrice(cart.product.price * cart.product.quantity)} 원`);
  const checkbox = () => result.getByRole("checkbox");
  const deleteBtn = () => result.getByRole("button", { name: /상품 삭제하기/ });
  const quantityUpBtn = () => result.getByRole("button", { name: "+" });
  const quantityDownBtn = () => result.getByRole("button", { name: "-" });

  return { image, name, price, checkbox, deleteBtn, quantityUpBtn, quantityDownBtn };
};

describe("<CardItem />", () => {
  it("상품 정보와 버튼들을 보여준다.", () => {
    const { image, name, price, checkbox, deleteBtn, quantityUpBtn, quantityDownBtn } =
      renderCartItem(cartItem);

    expect(image()).toBeInTheDocument();
    expect(name()).toBeInTheDocument();
    expect(price()).toBeInTheDocument();
    expect(checkbox()).toBeInTheDocument();
    expect(deleteBtn()).toBeInTheDocument();
    expect(quantityUpBtn()).toBeInTheDocument();
    expect(quantityDownBtn()).toBeInTheDocument();
  });
});
