import { useMutation, useQueryClient } from "react-query";

import cartService from "@/services/cartService";
import { Cart } from "@/@types/api";

function useCartItemMutation(cartItem: Cart) {
  const queryClient = useQueryClient();

  const afterHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };

  const updateCartQuantityMutation = useMutation(
    (newQuantity: number) => cartService.updateCartQuantity(cartItem.id, newQuantity),
    afterHandler,
  );

  const updateCartSelectedMutation = useMutation(
    () => cartService.updateCartSelected(cartItem.id, !cartItem.product.selected),
    afterHandler,
  );

  const deleteCartMutation = useMutation(() => cartService.deleteCart(cartItem.id), afterHandler);

  return {
    increseQuantity: () => updateCartQuantityMutation.mutate(cartItem.product.quantity + 1),
    decreseQuantity: () => updateCartQuantityMutation.mutate(cartItem.product.quantity - 1),
    updateSelected: () => updateCartSelectedMutation.mutate(),
    deleteCart: () => deleteCartMutation.mutate(),
  };
}
export default useCartItemMutation;
