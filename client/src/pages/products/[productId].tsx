import { QueryClient, dehydrate } from "react-query";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import productService from "@/services/productService";
import ProductDetail from "@/components/ProductDetail";

interface Params extends ParsedUrlQuery {
  productId: string;
}

function ProductDetailPage() {
  return (
    <main>
      <ProductDetail />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.params as Params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["/product", productId], () =>
    productService.getProduct(productId),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ProductDetailPage;
