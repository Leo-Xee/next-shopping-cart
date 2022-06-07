import { useMutation, useQueryClient } from "react-query";

import cartService from "@/services/cartService";
import { Cart } from "@/@types/api";

function useCartMutation() {
  const queryClient = useQueryClient();

  const option = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };

  const increseQuantityMutation = useMutation(
    (cartItem: Cart) => cartService.updateCartQuantity(cartItem.id, cartItem.product.quantity + 1),
    option,
  );

  const decreseQuantityMutation = useMutation(
    (cartItem: Cart) => cartService.updateCartQuantity(cartItem.id, cartItem.product.quantity - 1),
    option,
  );

  const updateCartSelectedMutation = useMutation(
    (cartItem: Cart) => cartService.updateCartSelected(cartItem.id, !cartItem.product.selected),
    option,
  );

  const deleteCartMutation = useMutation(
    (cartItem: Cart) => cartService.deleteCart(cartItem.id),
    option,
  );

  const deleteSelectedCartsMutation = useMutation(
    (cartIdList: number[]) => cartService.deleteSelectedCarts(cartIdList),
    option,
  );

  const updateSelectedAllMutation = useMutation(
    (checked: boolean) => cartService.updateSelectedAll(!checked),
    option,
  );

  return {
    increseQuantity: (cartItem: Cart) => increseQuantityMutation.mutate(cartItem),
    decreseQuantity: (cartItem: Cart) => decreseQuantityMutation.mutate(cartItem),
    updateSelected: (cartItem: Cart) => updateCartSelectedMutation.mutate(cartItem),
    updateSelectedAll: (checked: boolean) => updateSelectedAllMutation.mutate(checked),
    deleteSelectedCarts: (cartIdList: number[]) => deleteSelectedCartsMutation.mutate(cartIdList),
    deleteCart: (cartItem: Cart) => deleteCartMutation.mutate(cartItem),
  };
}
export default useCartMutation;
