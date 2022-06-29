import { useMutation, useQuery, useQueryClient } from "react-query";

import { OrderItemType } from "@/@types/api";
import orderService from "@/services/orderService";

export const useGetOrders = () => {
  return useQuery("/orders", orderService.getOrders);
};

export const useGetOrder = (orderId: string) => {
  return useQuery(["/orders", orderId], () => orderService.getOrder(orderId));
};

export const usePostOrder = () => {
  const queryClient = useQueryClient();
  return useMutation((orderDetails: OrderItemType[]) => orderService.addOrder(orderDetails), {
    onSuccess: () => {
      queryClient.invalidateQueries("/orders");
    },
  });
};
