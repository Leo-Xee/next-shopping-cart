import { useRouter } from "next/router";
import { useQuery } from "react-query";

import styled from "@emotion/styled";
import orderService from "@/services/orderService";
import OrderItem from "../OrderList/OrderItem";
import Indicator from "../Indicator";

const IndicatorWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: end;
`;

function OrderDetail() {
  const router = useRouter();
  const { orderId } = router.query;

  const { data } = useQuery(["/orders", orderId], () => orderService.getOrder(String(orderId)));

  const totalPrice = data?.orderDetails.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  return (
    <div>
      {data && (
        <div>
          <OrderItem orderItem={data} type="detail" />
          <IndicatorWrapper>
            <Indicator
              title="결제금액 정보"
              itemName="총 결제금액"
              itemPrice={totalPrice || 0}
              width="400px"
            />
          </IndicatorWrapper>
        </div>
      )}
    </div>
  );
}

export default OrderDetail;
