import { useMutation, useQueryClient } from "react-query";

import cartService from "@/services/cartService";

function useCartListMutation() {
  const queryClient = useQueryClient();

  const deleteSelectedCartsMutation = useMutation(
    (cartIdList: number[]) => cartService.deleteSelectedCarts(cartIdList),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/carts");
      },
    },
  );

  const updateSelectedAllMutation = useMutation(
    (checked: boolean) => cartService.updateSelectedAll(!checked),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/carts");
      },
    },
  );
  return {
    updateSelectedAll: (checked: boolean) => updateSelectedAllMutation.mutate(checked),
    deleteSelectedCarts: (cartIdList: number[]) => deleteSelectedCartsMutation.mutate(cartIdList),
  };
}

export default useCartListMutation;
