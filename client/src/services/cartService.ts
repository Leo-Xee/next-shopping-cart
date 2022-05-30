import { Cart } from "@/@types/api";
import fetcher from "@/shared/utils/fetcher";

const cartService = {
  getCarts: async () => {
    const data = await fetcher<Cart[]>("get", "/carts");
    return data;
  },
};

export default cartService;
