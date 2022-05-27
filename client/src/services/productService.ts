import { Product } from "@/@types/dto";
import fetcher from "@/shared/utils/fetcher";

const productService = {
  getProducts: async () => {
    const data = await fetcher<Product[]>("get", "/products");
    return data;
  },
  getProduct: async (id: number) => {
    const data = await fetcher<Product>("get", "/product", { id });
    return data;
  },
};

export default productService;
