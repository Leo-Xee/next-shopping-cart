import { useMutation, useQuery, useQueryClient } from "react-query";

import cartService from "@/services/cartService";
import { Cart, CartItem, Product } from "@/@types/api";

export const useGetCarts = () => {
  return useQuery("/carts", cartService.getCarts);
};

export const usePostCart = () => {
  return useMutation((product: Product) => cartService.addCart(product));
};

export const usePatchCart = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ cartId, fieldsToUpdate }: { cartId: number; fieldsToUpdate: Partial<CartItem> }) =>
      cartService.patchCart(cartId, fieldsToUpdate),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("/carts");
      },
    },
  );
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  return useMutation((cartItem: Cart) => cartService.deleteCart(cartItem.id), {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  });
};

export const useDeleteCarts = () => {
  const queryClient = useQueryClient();
  return useMutation((cartIdList: number[]) => cartService.deleteCarts(cartIdList), {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  });
};

export const usePatchCarts = () => {
  const queryClient = useQueryClient();
  return useMutation((checked: boolean) => cartService.patchCarts(!checked), {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  });
};
