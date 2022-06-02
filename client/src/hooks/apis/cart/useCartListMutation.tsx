import { useMutation, useQueryClient } from "react-query";
import cartService from "@/services/cartService";

function useCartListMutation() {
  const queryClient = useQueryClient();

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
  };
}

export default useCartListMutation;
