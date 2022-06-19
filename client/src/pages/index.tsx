import { dehydrate, QueryClient } from "react-query";
import { GetServerSideProps } from "next";
import Head from "next/head";

import ProductsList from "@/components/ProductList";
import productService from "@/services/productService";

function HomePage() {
  return (
    <>
      <Head>
        <title>WOOWA SHOP</title>
      </Head>
      <main>
        <ProductsList />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("/products", productService.getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
