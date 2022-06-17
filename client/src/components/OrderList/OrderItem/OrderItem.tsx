import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Order, Product } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import Button from "@/components/common/Button";
import useCartMutation from "@/hooks/apis/useCartMutation";
import useSnackBar from "@/hooks/useSnackBar";
import SnackBar from "@/components/common/SnackBar";

type OrderItemProps = {
  orderItem: Order;
  type: "list" | "detail";
};

function OrderItem({ orderItem, type }: OrderItemProps) {
  const router = useRouter();
  const { id, orderDetails } = orderItem;
  const { isShowing, setIsShowing } = useSnackBar(1.5);

  const { addCart } = useCartMutation();

  const addCartHandler = (product: Product) => {
    addCart(product);
    setIsShowing(true);
  };

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
              <a>
                <S.LinkedItem>
                  <Image src={imageUrl} alt={name} height="200px" width="200px" />
                  <S.Info>
                    <S.Name aria-label="상품명">{name}</S.Name>
                    <S.Price>
                      {filterPrice(price * quantity)} 원 / {quantity} 개
                    </S.Price>
                  </S.Info>
                </S.LinkedItem>
              </a>
            </Link>
            <S.ButtonWrapper>
              <Button
                buttonName="장바구니"
                colorType="primary"
                size="full"
                onClick={() => addCartHandler({ id: productId, name, price, imageUrl })}
              />
            </S.ButtonWrapper>
          </S.DetailItem>
        ))}
      </ul>
      {isShowing && <SnackBar message="상품이 장바구니에 추가되었습니다." duration={1.5} />}
    </S.Container>
  );
}

export default OrderItem;
