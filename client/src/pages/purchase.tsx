import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";

import PurchaseList from "@/components/PurchaseList";
import cartService from "@/services/cartService";

function PurchasePage() {
  return (
    <main>
      <PurchaseList />
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
export default PurchasePage;
