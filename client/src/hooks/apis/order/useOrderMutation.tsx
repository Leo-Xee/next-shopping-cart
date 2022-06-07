import { useMutation } from "react-query";
import { OrderItemType } from "@/@types/api";
import orderService from "@/services/orderService";

function useOrderMutation() {
  const addOrderMutation = useMutation((orderDetails: OrderItemType[]) =>
    orderService.addOrder(orderDetails),
  );

  return {
    addOrder: (orderDetails: OrderItemType[]) => addOrderMutation.mutate(orderDetails),
  };
}

export default useOrderMutation;
