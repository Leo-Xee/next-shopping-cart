import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import Head from "next/head";

import OrderList from "@/components/OrderList";
import orderService from "@/services/orderService";

function orderListPage() {
  return (
    <>
      <Head>
        <title>WOOWA SHOP | 주문목록</title>
      </Head>
      <main>
        <OrderList />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("/orders", orderService.getOrders);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default orderListPage;
