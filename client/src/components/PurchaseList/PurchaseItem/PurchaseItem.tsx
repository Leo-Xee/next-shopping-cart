import Image from "next/image";

import * as S from "./style";
import { Cart } from "@/@types/api";
import { filterPrice } from "@/shared/utils/filter";

type PurchaseItemProps = {
  cartItem: Cart;
};

function PurchaseItem({ cartItem }: PurchaseItemProps) {
  const { name, price, imageUrl, quantity } = cartItem.product;
  return (
    <S.Container>
      <Image src={imageUrl} alt={name} height="200px" width="200px" />
      <S.Info>
        <S.Name aria-label="상품명">{name}</S.Name>
        <S.Price>
          {filterPrice(price * quantity)} 원 / {quantity} 개
        </S.Price>
      </S.Info>
    </S.Container>
  );
}

export default PurchaseItem;
