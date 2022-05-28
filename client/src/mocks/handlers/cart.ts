import { rest } from "msw";
import BASE_URL from "@/shared/constant/common";

const cartHandler = [
  /**
   * 장바구니 전체 상품 조회
   */
  rest.get(`${BASE_URL}/carts`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          product: {
            id: 1,
            name: "냉면용기(대)",
            price: 83700,
            imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
          },
        },
        {
          id: 2,
          product: {
            id: 2,
            name: "생새우살 (71/90) 500g 4개",
            price: 29000,
            imageUrl:
              "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
          },
        },
      ]),
    );
  }),
];

export default cartHandler;
