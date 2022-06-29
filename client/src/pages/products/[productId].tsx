import { QueryClient, dehydrate } from "react-query";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

import productService from "@/services/productService";
import ProductDetail from "@/components/ProductDetail";
import { useGetProduct } from "@/hooks/apis/useProductMutation";

interface Params extends ParsedUrlQuery {
  productId: string;
}

type ProductDetailPageProps = {
  productId: string;
};

function ProductDetailPage({ productId }: ProductDetailPageProps) {
  const { data: product } = useGetProduct(String(productId));

  return (
    <>
      <Head>
        <title>WOOWA SHOP | {product?.name}</title>
      </Head>
      <main>
        <ProductDetail />
      </main>
    </>
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
      productId,
    },
  };
};

export default ProductDetailPage;
