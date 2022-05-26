import { useEffect } from "react";
import styled from "@emotion/styled";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getAllProducts } from "@/app/features/products/productsSlice";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  // 컴포넌트에서 다른 라이브러리를 임포트한다면 customHook으로 빼야되는 신호
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);

  // SSR 적용 시에 index의 getStaticProps에서 dispatch
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Container>
      {products.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </Container>
  );
}

export default ProductsList;
