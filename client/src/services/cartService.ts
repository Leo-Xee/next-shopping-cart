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
    const data = await fetcher("patch", `/carts/quantity/${cartId}`, { quantity });
    return data;
  },
  deleteCartItem: async (cartId: number) => {
    const data = await fetcher("delete", `/carts/${cartId}`);
    return data;
  },
};

export default cartService;
