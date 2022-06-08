import { rest } from "msw";
import { orders, PostOrderBody } from "../data/orders";
import BASE_URL from "@/shared/constant/common";

const orderHandler = [
  /**
   * 전체 주문 조회
   */
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(orders));
  }),

  /**
   * 단일 주문 조회
   */
  rest.get(`${BASE_URL}/orders/:orderId`, (req, res, ctx) => {
    const { orderId } = req.params;

    const targetOrder = orders.find((order) => order.id === Number(orderId));

    return res(ctx.status(200), ctx.json(targetOrder));
  }),

  /**
   * 주문 추가
   */
  rest.post<PostOrderBody>(`${BASE_URL}/orders`, (req, res, ctx) => {
    const { orderDetails } = req.body;

    orders.push({
      id: Date.now(),
      orderDetails: [...orderDetails],
    });

    return res(ctx.status(201));
  }),
];

export default orderHandler;
