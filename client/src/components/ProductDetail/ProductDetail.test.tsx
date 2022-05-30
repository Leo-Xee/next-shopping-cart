import { RouterContext } from "next/dist/shared/lib/router-context";
import { Product } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import { render } from "@/shared/utils/test-utils";
import ProductDetail from "./ProductDetail";
import createMockRouter from "@/shared/utils/createMockRouter";

const product = {
  id: 1,
  name: "냉면용기(대)",
  price: 83700,
  imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
};

const renderProductDetail = async (productItem: Product) => {
  const router = createMockRouter({ query: { productId: "1" } });
  const result = render(
    <RouterContext.Provider value={router}>
      <ProductDetail />
    </RouterContext.Provider>,
  );

  const { id } = productItem;
  const name = await result.findByText(productItem.name);
  const price = await result.findByText(`${filterPrice(productItem.price)}원`);
  const image = await result.findByRole("img", { name: productItem.name });
  const cartButton = await result.findByRole("button", { name: "장바구니" });

  return { result, name, price, image, cartButton, id };
};

describe("<ProductDetail />", () => {
  describe("상품 정보와 장바구니 버튼을 보여준다.", () => {
    it("상품의 image를 보여준다.", async () => {
      const { image } = await renderProductDetail(product);

      expect(image).toBeInTheDocument();
    });

    it("상품의 full name을 보여준다.", async () => {
      const { name } = await renderProductDetail(product);

      expect(name).toBeInTheDocument();
    });

    it("상품의 price를 보여준다.", async () => {
      const { price } = await renderProductDetail(product);

      expect(price).toBeInTheDocument();
    });

    it("상품의 카트 버튼을 보여준다.", async () => {
      const { cartButton } = await renderProductDetail(product);

      expect(cartButton).toBeInTheDocument();
    });
  });

  it("카트 버튼을 클릭하면 '장바구니에 추가 완료' Snackbar를 보여준다.", () => {}); // request 요청도 담아야하나?
});
