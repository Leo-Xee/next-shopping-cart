import { GetServerSideProps } from "next";
import { AppStore, wrapper } from "@/app/store";
import ProductsList from "@/components/ProductList";
import {
  getProducts,
  getRunningOperationPromises,
} from "@/services/productsApi";

function HomePage() {
  return (
    <main>
      <ProductsList />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store: AppStore) => async () => {
    store.dispatch(getProducts.initiate());

    await Promise.all(getRunningOperationPromises());

    return {
      props: {},
    };
  });

export default HomePage;
