import styled from "@emotion/styled";
import { useQuery } from "react-query";

import productService from "@/services/productService";
import ProductItem from "./ProductItem";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  const { data } = useQuery("/products", productService.getProducts);

  return (
    <Container>
      {data && data.map((product) => <ProductItem key={product.id} data={product} />)}
    </Container>
  );
}

export default ProductsList;
