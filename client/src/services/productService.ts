import { Product } from "@/@types/dto";
import fetcher from "@/shared/utils/fetcher";

const productService = {
  getProducts: async () => {
    const data = await fetcher<Product[]>("get", "/products");
    return data;
  },
  getProduct: async (id: string) => {
    const data = await fetcher<Product>("get", `/products/${id}`);
    return data;
  },
};

export default productService;
