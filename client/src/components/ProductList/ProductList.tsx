import styled from "@emotion/styled";

import ProductItem from "./ProductItem";
import { useGetProducts } from "@/hooks/queries/product";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  const { data: productList } = useGetProducts();

  return (
    <Container>
      {productList &&
        productList.map((product) => <ProductItem key={product.id} productItem={product} />)}
    </Container>
  );
}

export default ProductsList;
