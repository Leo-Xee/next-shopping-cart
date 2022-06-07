import { Order, OrderItemType } from "@/@types/api";
import fetcher from "@/shared/utils/fetcher";

const orderService = {
  getOrders: async () => {
    const data = await fetcher<Order[]>("get", "/orders");
    return data;
  },
  addOrder: async (orderDetails: OrderItemType[]) => {
    const data = await fetcher("post", "/orders", { orderDetails });
    return data;
  },
};

export default orderService;
