import { Order, OrderItemType } from "@/@types/api";

export type PostOrderBody = {
  orderDetails: OrderItemType[];
};

export const orders: Order[] = [];
