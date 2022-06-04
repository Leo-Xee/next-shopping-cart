import { rest } from "msw";
import BASE_URL from "@/shared/constant/common";
import products from "../data/products";

const productHandler = [
  /**
   * 전체 상품 조회
   */
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(products));
  }),

  /**
   * 단일 상품 조회
   */
  rest.get(`${BASE_URL}/products/:id`, (req, res, ctx) => {
    const { id } = req.params;

    const targetProduct = products.find((product) => product.id === Number(id));

    return res(ctx.status(200), ctx.json(targetProduct));
  }),
];

export default productHandler;
