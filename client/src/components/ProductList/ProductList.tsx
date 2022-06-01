import styled from "@emotion/styled";
import { useQuery } from "react-query";

import productService from "@/services/productService";
import ProductItem from "./ProductItem";
import Spinner from "../common/Spinner";
import ErroBanner from "../common/ErrorBanner/ErroBanner";

const Container = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
`;

function ProductsList() {
  const { isLoading, isError, data } = useQuery("/products", productService.getProducts);

  return (
    <Container>
      {isLoading ? (
        <Spinner message="로딩 중..." />
      ) : isError ? (
        <ErroBanner />
      ) : (
        data && data.map((product) => <ProductItem key={product.id} data={product} />)
      )}
    </Container>
  );
}

export default ProductsList;
