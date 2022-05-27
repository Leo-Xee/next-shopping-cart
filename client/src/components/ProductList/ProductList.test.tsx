import { Product } from "@/@types/dto";
import { filterName } from "@/shared/utils/filter";
import { render } from "@/shared/utils/test-utils";
import ProductsList from "./ProductList";

type ProductList = Product[];

const products = [
  {
    id: 1,
    name: "냉면용기(대)",
    price: 83700,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
  },
  {
    id: 2,
    name: "생새우살 (71/90) 500g 4개",
    price: 29000,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
  },
];

const renderProductList = async (productItems: ProductList) => {
  const result = render(<ProductsList />);

  const productItem1 = await result.findByText(`${filterName(productItems[0].name)}`);
  const productItem2 = await result.findByText(`${filterName(productItems[1].name)}`);

  return { result, productItem1, productItem2 };
};

describe("<ProductList />", () => {
  it("상품의 리스트를 보여준다.", async () => {
    const { productItem1, productItem2 } = await renderProductList(products);

    expect(productItem1).toBeInTheDocument();
    expect(productItem2).toBeInTheDocument();
  });
});
