import { Cart, CartItem, Product } from "@/@types/api";
import fetcher from "@/shared/utils/fetcher";

const cartService = {
  getCarts: async () => {
    const data = await fetcher<Cart[]>("get", "/carts");
    return data;
  },
  addCart: async (product: Product) => {
    const data = await fetcher("post", "/carts", { product });
    return data;
  },
  deleteCart: async (cartId: number) => {
    const data = await fetcher("delete", `/carts/${cartId}`);
    return data;
  },
  patchCart: async (cartId: number, fieldsToUpdate: Partial<CartItem>) => {
    const data = await fetcher("patch", `/carts/${cartId}`, fieldsToUpdate);
    return data;
  },
  patchCarts: async (selected: boolean) => {
    const data = await fetcher("patch", "/carts", { selected });
    return data;
  },
  deleteCarts: async (cartIdList: number[]) => {
    const cartIdListString = cartIdList.join(",");
    const data = await fetcher("delete", `/carts?deleteItems=${cartIdListString}`);
    return data;
  },
};

export default cartService;
