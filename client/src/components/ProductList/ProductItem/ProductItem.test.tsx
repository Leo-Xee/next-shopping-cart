import { Product } from "@/@types/api";
import { filterName, filterPrice } from "@/shared/utils/filter";
import { fireEvent, render, screen } from "@/shared/utils/test-utils";
import ProductItem from "./ProductItem";

const product = {
  id: 11,
  name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
  price: 21800,
  imageUrl: "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
};

const renderProductItem = (productItem: Product) => {
  const result = render(<ProductItem productItem={productItem} />);

  const { id } = productItem;
  const name = result.getByText(filterName(productItem.name));
  const price = result.getByText(`${filterPrice(productItem.price)}원`);
  const image = result.getByRole("img", { name: productItem.name });
  const cartButton = result.getByRole("button", { name: `${productItem.name} 장바구니에 담기` });

  return { result, name, price, image, cartButton, id };
};

describe("<ProductItem />", () => {
  describe("상품 정보와 카트 버튼을 보여준다.", () => {
    it("상품의 name을 20자 이하로 보여준다.", () => {
      const { name } = renderProductItem(product);
      expect(name).toBeInTheDocument();
    });

    it("상품의 price를 ','로 단위를 구분해서 보여준다.", () => {
      const { price } = renderProductItem(product);
      expect(price).toBeInTheDocument();
    });

    it("상품의 image를 보여준다.", () => {
      const { image } = renderProductItem(product);
      expect(image).toBeInTheDocument();
    });

    it("상품의 카트 버튼을 보여준다.", () => {
      const { cartButton } = renderProductItem(product);
      expect(cartButton).toBeInTheDocument();
    });
  });

  it("상품을 클릭하면 상품 상세페이지로 이동한다.", () => {
    render(<ProductItem productItem={product} />);

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", `/products/${product.id}`);
  });

  it("카트 버튼을 클릭하면 '장바구니에 추가 완료' Snackbar를 보여준다.", async () => {
    const { cartButton, result } = renderProductItem(product);

    fireEvent.click(cartButton);

    const snackBar = await result.findByText(/상품이 장바구니에 추가되었습니다./);

    expect(snackBar).toBeInTheDocument();
  });
});
