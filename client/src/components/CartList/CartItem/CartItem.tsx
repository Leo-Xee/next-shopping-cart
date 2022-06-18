import Image from "next/image";
import { BsTrash } from "react-icons/bs";

import Link from "next/link";
import * as S from "./style";
import { Cart } from "@/@types/api";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import useCartItemMutation from "@/hooks/apis/useCartMutation";

type CartItemProps = {
  cartItem: Cart;
};

function CartItem({ cartItem }: CartItemProps) {
  const { id, name, imageUrl, price, quantity, selected } = cartItem.product;

  const { increseQuantity, decreseQuantity, updateSelected, deleteCart } = useCartItemMutation();

  return (
    <S.Container>
      <Checkbox
        id={`${name} 상품 체크`}
        onChange={() => updateSelected(cartItem)}
        checked={selected}
      />
      <Link href={`/products/${id}`}>
        <a>
          <S.LinkContainer>
            <Image src={imageUrl} alt={name} width="200px" height="200px" />
            <S.Name>{name}</S.Name>
          </S.LinkContainer>
        </a>
      </Link>
      <S.Controllor>
        <button
          type="button"
          aria-label={`${name} 상품 삭제하기`}
          onClick={() => deleteCart(cartItem)}
        >
          <BsTrash size={25} />
        </button>
        <S.QuantityContainer>
          <S.Quantity aria-label={`${name} 수량`}>{quantity}</S.Quantity>
          <S.QuantityCotrollor>
            <button type="button" onClick={() => increseQuantity(cartItem)}>
              +
            </button>
            <button
              type="button"
              onClick={() => decreseQuantity(cartItem)}
              disabled={quantity <= 1}
            >
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
