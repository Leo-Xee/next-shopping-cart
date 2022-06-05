import Image from "next/image";
import { BsTrash } from "react-icons/bs";

import * as S from "./style";
import { Cart } from "@/@types/api";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import useCartItemMutation from "@/hooks/apis/cart/useCartItemMutation";

type CartItemProps = {
  cartItem: Cart;
};

function CartItem({ cartItem }: CartItemProps) {
  const { name, imageUrl, price, quantity, selected } = cartItem.product;

  const { increseQuantity, decreseQuantity, updateSelected, deleteCart } =
    useCartItemMutation(cartItem);

  return (
    <S.Container>
      <Checkbox id={`check__${name}`} onChange={() => updateSelected()} checked={selected} />
      <Image src={imageUrl} alt={name} width="200px" height="200px" />
      <S.Name>{name}</S.Name>
      <S.Controllor>
        <button type="button" aria-label={`${name} 상품 삭제하기`} onClick={() => deleteCart()}>
          <BsTrash size={25} />
        </button>
        <S.QuantityContainer>
          <S.Quantity>{quantity}</S.Quantity>
          <S.QuantityCotrollor>
            <button type="button" onClick={() => increseQuantity()}>
              +
            </button>
            <button type="button" onClick={() => decreseQuantity()} disabled={quantity <= 1}>
              -
            </button>
          </S.QuantityCotrollor>
        </S.QuantityContainer>
        <S.TotalPrice>{filterPrice(price * quantity)} 원</S.TotalPrice>
      </S.Controllor>
    </S.Container>
  );
}

export default CartItem;
