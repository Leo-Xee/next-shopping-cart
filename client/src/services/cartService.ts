import { Cart, Product } from "@/@types/api";
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
  updateQuantity: async (cartId: number, quantity: number) => {
    const data = await fetcher("patch", `/carts/${cartId}/quantity`, { quantity });
    return data;
  },
  deleteCart: async (cartId: number) => {
    const data = await fetcher("delete", `/carts/${cartId}`);
    return data;
  },
  updateSelected: async (cartId: number, selected: boolean) => {
    const data = await fetcher("patch", `/carts/${cartId}/selected`, { selected });
    return data;
  },
  updateSelectedAll: async (selected: boolean) => {
    const data = await fetcher("patch", "/carts/selected", { selected });
    return data;
  },
};

export default cartService;
