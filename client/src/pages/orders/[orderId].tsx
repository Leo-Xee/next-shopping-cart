import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { dehydrate, QueryClient } from "react-query";

import orderService from "@/services/orderService";
import OrderDetail from "@/components/OrderDetail";

interface Params extends ParsedUrlQuery {
  orderId: string;
}

function OrderDetailPage() {
  return (
    <main>
      <OrderDetail />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { orderId } = context.params as Params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["/order", orderId], () => orderService.getOrder(orderId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default OrderDetailPage;
