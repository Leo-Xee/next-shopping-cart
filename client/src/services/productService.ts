import axios from "axios";
import { Product } from "@/@types/dto";

axios.defaults.baseURL = "http://localhost:3003";

const productService = {
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const res = await axios.get<Product[]>("/products");
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      }
      throw new Error("different error than axios");
    }
  },
};

export default productService;
