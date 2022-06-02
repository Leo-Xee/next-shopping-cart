import { useMutation, useQueryClient } from "react-query";

import cartService from "@/services/cartService";
import { Cart } from "@/@types/api";

function useCartMutation(cartItem: Cart) {
  const queryClient = useQueryClient();

  const afterHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };

  const updateQuantityMutation = useMutation(
    (newQuantity: number) => cartService.updateQuantity(cartItem.id, newQuantity),
    afterHandler,
  );

  const updateSelectedMutation = useMutation(
    () => cartService.updateSelected(cartItem.id, !cartItem.product.selected),
    afterHandler,
  );

  const dropMutation = useMutation(() => cartService.deleteCart(cartItem.id), afterHandler);

  return {
    increseQuantity: () => updateQuantityMutation.mutate(cartItem.product.quantity + 1),
    decreseQuantity: () => updateQuantityMutation.mutate(cartItem.product.quantity - 1),
    updateSelected: () => updateSelectedMutation.mutate(),
    deleteCart: () => dropMutation.mutate(),
  };
}
export default useCartMutation;
