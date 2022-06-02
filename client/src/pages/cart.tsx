import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import CartList from "@/components/CartList";
import cartService from "@/services/cartService";

function CartPage() {
  return (
    <main>
      <CartList />
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

export default CartPage;
