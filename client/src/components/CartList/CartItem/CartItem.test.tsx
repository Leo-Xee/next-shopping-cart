import { Cart } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import { render, screen } from "@/shared/utils/test-utils";
import CartItem from "./CartItem";

const cartItem: Cart = {
  id: 1,
  product: {
    id: 1,
    name: "냉면용기(대)",
    price: 83700,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
    quantity: 1,
    selected: false,
  },
};

const renderCartItem = (cart: Cart) => {
  const result = render(<CartItem cartItem={cart} />);

  const { id } = cart.product;
  const image = () => result.getByRole("img", { name: `${cart.product.name}` });
  const name = () => result.getByText(cart.product.name);
  const price = () =>
    result.getByText(`${filterPrice(cart.product.price * cart.product.quantity)} 원`);
  const checkbox = () => result.getByRole("checkbox");
  const deleteBtn = () => result.getByRole("button", { name: /상품 삭제하기/ });
  const quantityUpBtn = () => result.getByRole("button", { name: "+" });
  const quantityDownBtn = () => result.getByRole("button", { name: "-" });

  return { id, image, name, price, checkbox, deleteBtn, quantityUpBtn, quantityDownBtn };
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

  it("카트의 수량이 1 이하일 때 수량 감소 버튼(-)이 disabled 된다.", () => {
    const { quantityDownBtn } = renderCartItem(cartItem);

    expect(quantityDownBtn()).toBeDisabled();
  });

  it("상품의 이름과 이미지를 클릭하면 상품 상세 페이지로 이동한다.", () => {
    const { id: productId } = renderCartItem(cartItem);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/products/${productId}`);
  });
});
