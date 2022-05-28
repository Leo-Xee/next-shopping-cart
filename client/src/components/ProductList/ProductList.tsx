import styled from "@emotion/styled";
import { useQuery } from "react-query";

import productService from "@/services/productService";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  const { isLoading, isError, data } = useQuery("/products", productService.getProducts);

  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {data && data.map((product) => <ProductItem key={product.id} data={product} />)}
    </Container>
  );
}

export default ProductsList;
