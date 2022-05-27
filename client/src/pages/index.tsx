import { dehydrate, QueryClient } from "react-query";
import ProductsList from "@/components/ProductList";
import productService from "@/services/productService";

function HomePage() {
  return (
    <main>
      <ProductsList />
    </main>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("/products", productService.getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomePage;
