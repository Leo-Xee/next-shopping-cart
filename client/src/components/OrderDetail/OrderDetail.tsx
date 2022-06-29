import { useRouter } from "next/router";

import styled from "@emotion/styled";
import OrderItem from "../OrderList/OrderItem";
import Indicator from "../Indicator";
import Title from "../common/Title";
import { useGetOrder } from "@/hooks/apis/useOrderMutation";

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

function OrderDetail() {
  const router = useRouter();
  const { orderId } = router.query;

  const { data } = useGetOrder(String(orderId));

  const totalPrice = data?.orderDetails.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);

  return (
    <div>
      {data && (
        <Conatiner>
          <Title title="주문상세" />
          <OrderItem orderItem={data} type="detail" />
          <IndicatorWrapper>
            <Indicator
              title="결제금액 정보"
              itemName="총 결제금액"
              itemPrice={totalPrice || 0}
              width="400px"
            />
          </IndicatorWrapper>
        </Conatiner>
      )}
    </div>
  );
}

export default OrderDetail;
