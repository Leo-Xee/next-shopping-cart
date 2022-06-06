import Image from "next/image";

import * as S from "./style";
import { Cart } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";

type OrderItemProps = {
  cartItem: Cart;
};

function OrderItem({ cartItem }: OrderItemProps) {
  const { name, price, imageUrl, quantity } = cartItem.product;
  return (
    <S.Container>
      <Image src={imageUrl} alt={name} height="200px" width="200px" />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Price>
          {filterPrice(price)} 원 / {quantity} 개
        </S.Price>
      </S.Info>
    </S.Container>
  );
}

export default OrderItem;
