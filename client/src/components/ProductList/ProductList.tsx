import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getProducts } from "@/app/features/products/productsSlice";

function ProductsList() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>ProductsList</div>;
}

export default ProductsList;
