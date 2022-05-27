import styled from "@emotion/styled";
import { useGetProductsQuery } from "@/services/productsApi";

import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  const { data } = useGetProductsQuery();

  return (
    <Container>
      {data?.map((product) => (
        <ProductItem key={product.id} data={product} />
      ))}
    </Container>
  );
}

export default ProductsList;
