import { useMutation, useQueryClient } from "react-query";

import cartService from "@/services/cartService";

function useCartListMutation() {
  const queryClient = useQueryClient();

  const afterHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };

  const deleteSelectedCartsMutation = useMutation(
    (cartIdList: number[]) => cartService.deleteSelectedCarts(cartIdList),
    afterHandler,
  );

  const updateSelectedAllMutation = useMutation(
    (checked: boolean) => cartService.updateSelectedAll(!checked),
    afterHandler,
  );

  return {
    updateSelectedAll: (checked: boolean) => updateSelectedAllMutation.mutate(checked),
    deleteSelectedCarts: (cartIdList: number[]) => deleteSelectedCartsMutation.mutate(cartIdList),
  };
}

export default useCartListMutation;
