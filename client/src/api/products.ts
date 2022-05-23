import axios from "axios";
import { Product } from "../@types/dto";

const getAllProducts = async () => {
  const res = await axios.get<Product[]>("http://localhost:3003/products");
  return res.data;
};

export default getAllProducts;
