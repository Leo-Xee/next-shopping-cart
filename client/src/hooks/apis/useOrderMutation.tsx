import { useMutation, useQueryClient } from "react-query";

import { OrderItemType } from "@/@types/api";
import orderService from "@/services/orderService";

function useOrderMutation() {
  const queryClient = useQueryClient();

  const option = {
    onSuccess: () => {
      queryClient.invalidateQueries("/orders");
    },
  };

  const addOrderMutation = useMutation(
    (orderDetails: OrderItemType[]) => orderService.addOrder(orderDetails),
    option,
  );

  return {
    addOrder: (orderDetails: OrderItemType[]) => addOrderMutation.mutate(orderDetails),
  };
}

export default useOrderMutation;
