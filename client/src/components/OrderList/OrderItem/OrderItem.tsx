import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Order } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import Button from "@/components/common/Button";
import useCartMutation from "@/hooks/apis/useCartMutation";

type OrderItemProps = {
  orderItem: Order;
  type: "list" | "detail";
};

function OrderItem({ orderItem, type }: OrderItemProps) {
  const router = useRouter();
  const { id, orderDetails } = orderItem;

  const { addCart } = useCartMutation();

  return (
    <S.Container>
      <S.Header>
        <span>주문번호 : {id}</span>
        {type === "list" && (
          <button type="button" onClick={() => router.push(`/orders/${id}`)}>
            상세 보기
          </button>
        )}
      </S.Header>
      <ul>
        {orderDetails.map(({ id: productId, name, price, quantity, imageUrl }) => (
          <S.DetailItem key={productId}>
            <Link href={`/products/${productId}`}>
              <S.Anchor>
                <Image src={imageUrl} alt={name} height="200px" width="200px" />
                <S.Info>
                  <S.Name>{name}</S.Name>
                  <S.Price>
                    {filterPrice(price * quantity)} 원 / {quantity} 개
                  </S.Price>
                </S.Info>
              </S.Anchor>
            </Link>
            <S.ButtonWrapper>
              <Button
                buttonName="장바구니"
                colorType="primary"
                size="full"
                onClick={() => addCart({ id: productId, name, price, imageUrl })}
              />
            </S.ButtonWrapper>
          </S.DetailItem>
        ))}
      </ul>
    </S.Container>
  );
}

export default OrderItem;
