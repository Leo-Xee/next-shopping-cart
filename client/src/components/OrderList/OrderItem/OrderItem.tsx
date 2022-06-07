import Image from "next/image";

import { Order } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import Button from "@/components/common/Button";

type OrderItemProps = {
  orderItem: Order;
};

function OrderItem({ orderItem }: OrderItemProps) {
  const { id, orderDetails } = orderItem;

  const addCartHanlder = () => {};

  return (
    <S.Container>
      <S.Header>
        <span>주문번호 : {id}</span>
        <button type="button">상세 보기</button>
      </S.Header>
      <S.DetailList>
        {orderDetails.map(({ id: productId, name, price, quantity, imageUrl }) => (
          <S.DetailItem key={productId}>
            <Image src={imageUrl} alt={name} height="200px" width="200px" />
            <S.Info>
              <S.Name>{name}</S.Name>
              <S.Price>
                {filterPrice(price * quantity)} 원 / {quantity} 개
              </S.Price>
            </S.Info>
            <S.ButtonWrapper>
              <Button
                buttonName="장바구니"
                colorType="primary"
                size="full"
                onClick={addCartHanlder}
              />
            </S.ButtonWrapper>
          </S.DetailItem>
        ))}
      </S.DetailList>
    </S.Container>
  );
}

export default OrderItem;
