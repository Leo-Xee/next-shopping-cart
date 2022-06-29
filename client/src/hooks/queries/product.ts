import { useQuery } from "react-query";
import productService from "@/services/productService";

export const useGetProducts = () => {
  return useQuery("/products", productService.getProducts);
};

export const useGetProduct = (productId: string) => {
  return useQuery(["/product", productId], () => productService.getProduct(productId));
};
