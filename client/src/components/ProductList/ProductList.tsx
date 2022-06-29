import styled from "@emotion/styled";

import ProductItem from "./ProductItem";
import { useGetProducts } from "@/hooks/apis/useProductMutation";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  const { data } = useGetProducts();

  return (
    <Container>
      {data && data.map((product) => <ProductItem key={product.id} data={product} />)}
    </Container>
  );
}

export default ProductsList;
