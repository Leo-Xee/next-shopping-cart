import styled from "@emotion/styled";

import Title from "../common/Title";
import OrderItem from "./OrderItem";
import ErrorBanner from "../common/ErrorBanner";
import { useGetOrders } from "@/hooks/apis/useOrderMutation";

const List = styled.ul`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

function OrderList() {
  const { data } = useGetOrders();

  return (
    <>
      <Title title="주문목록" />
      <List>
        {data?.length !== 0 ? (
          data?.map((order) => (
            <li key={order.id} aria-label="주문">
              <OrderItem orderItem={order} type="list" />
            </li>
          ))
        ) : (
          <ErrorBanner type="empty" />
        )}
      </List>
    </>
  );
}

export default OrderList;
