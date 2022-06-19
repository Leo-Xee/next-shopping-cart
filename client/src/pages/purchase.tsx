import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import Head from "next/head";

import PurchaseList from "@/components/PurchaseList";
import cartService from "@/services/cartService";

function PurchasePage() {
  return (
    <>
      <Head>
        <title>WOOWA SHOP | 결제</title>
      </Head>
      <main>
        <PurchaseList />
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("/carts", cartService.getCarts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default PurchasePage;
