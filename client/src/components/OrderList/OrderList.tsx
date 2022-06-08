import { useQuery } from "react-query";
import styled from "@emotion/styled";

import orderService from "@/services/orderService";
import Title from "../common/Title";
import OrderItem from "./OrderItem";

const List = styled.ul`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

function OrderList() {
  const { data } = useQuery("/orders", orderService.getOrders);

  return (
    <>
      <Title title="주문목록" />
      <List>
        {data &&
          data.map((order) => (
            <li>
              <OrderItem key={order.id} orderItem={order} type="list" />
            </li>
          ))}
      </List>
    </>
  );
}

export default OrderList;
