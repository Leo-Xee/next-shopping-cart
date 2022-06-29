import { rest } from "msw";
import BASE_URL from "@/shared/constant/common";
import { carts, PatchRequestBody, PatchSelectedRequestBody, PostRequestBody } from "../data/carts";

const cartHandler = [
  /**
   * 전체 카트 조회
   */
  rest.get(`${BASE_URL}/carts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(carts));
  }),

  /**
   * 카트 추가(이미 존재하면 수량 +1)
   */
  rest.post<PostRequestBody>(`${BASE_URL}/carts`, (req, res, ctx) => {
    const { product } = req.body;

    const targetIdx = carts.findIndex((cart) => cart.product.id === product.id);

    if (targetIdx < 0) {
      carts.push({
        id: Date.now(),
        product: {
          ...product,
          quantity: 1,
          selected: false,
        },
      });
    } else {
      carts.forEach((cart) => {
        if (cart.product.id === product.id) {
          cart.product.quantity += 1;
        }
      });
    }

    return res(ctx.status(200));
  }),

  /**
   * 단일 카트의 필드 변경
   */
  rest.patch<PatchRequestBody>(`${BASE_URL}/carts/:cartId`, (req, res, ctx) => {
    const { cartId } = req.params;
    const { selected, quantity } = req.body;

    if (req.body.hasOwnProperty("selected")) {
      carts.forEach((cart) => {
        if (cart.id === Number(cartId)) {
          cart.product.selected = selected;
        }
      });
    }

    if (req.body.hasOwnProperty("quantity")) {
      carts.forEach((cart) => {
        if (cart.id === Number(cartId)) {
          cart.product.quantity = quantity;
        }
      });
    }

    return res(ctx.status(200));
  }),

  /**
   * 다수의 필드 변경
   */
  rest.patch<PatchSelectedRequestBody>(`${BASE_URL}/carts`, (req, res, ctx) => {
    const { selected } = req.body;

    carts.forEach((cart) => {
      cart.product.selected = selected;
    });

    return res(ctx.status(200));
  }),

  /**
   * 다수의 카트 삭제
   */
  rest.delete(`${BASE_URL}/carts`, (req, res, ctx) => {
    const deleteItems = req.url.searchParams.get("deleteItems");

    if (!deleteItems) return res(ctx.status(400));

    const cartIdList = deleteItems.split(",");
    cartIdList.forEach((cartId) => {
      const targetIdx = carts.findIndex((cart) => cart.id === Number(cartId));

      carts.splice(targetIdx, 1);
    });

    return res(ctx.status(200));
  }),

  /**
   * 단일 카트 삭제
   */
  rest.delete(`${BASE_URL}/carts/:cartId`, (req, res, ctx) => {
    const { cartId } = req.params;

    const targetIdx = carts.findIndex((cart) => cart.id === Number(cartId));

    carts.splice(targetIdx, 1);

    return res(ctx.status(200));
  }),
];

export default cartHandler;
