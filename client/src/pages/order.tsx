import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import OrderList from "@/components/OrderList";
import cartService from "@/services/cartService";

function OrderPage() {
  return (
    <main>
      <OrderList />
    </main>
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
export default OrderPage;
