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
  },
};

const renderCartItem = (cart: Cart) => {
  const result = render(<CartItem cartItem={cartItem} />);

  const image = result.getByRole("img", { name: `${cart.product.name}` });
  const name = result.getByText(cart.product.name);
  const price = result.getByText(filterPrice(cart.product.price));
  const checkbox = result.getByRole("checkbox");
  const deleteBtn = result.getByRole("button", { name: /상품 삭제하기/ });
  const quantityUpBtn = result.getByRole("button", { name: "+" });
  const quantityDownBtn = result.getByRole("button", { name: "-" });

  return { image, name, price, checkbox, deleteBtn, quantityUpBtn, quantityDownBtn };
};

describe("<CardItem />", () => {
  describe("상품 정보와 버튼들을 보여준다.", () => {
    it("상품의 image를 보여준다.", () => {});
    it("상품의 full name을 보여준다.", () => {});
    it("상품의 price를 보여준다.", () => {});
    it("상품 수량을 보여준다.", () => {});
    it("상품 체크 박스를 보여준다.", () => {});
    it("상품 삭제 버튼을 보여준다.", () => {});
  });
});
