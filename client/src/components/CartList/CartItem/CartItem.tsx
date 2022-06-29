import Image from "next/image";
import { BsTrash } from "react-icons/bs";

import Link from "next/link";
import * as S from "./style";
import { Cart } from "@/@types/api";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import { useDeleteCart, usePatchCart } from "@/hooks/queries/cart";

type CartItemProps = {
  cartItem: Cart;
};

function CartItem({ cartItem }: CartItemProps) {
  const { id, name, imageUrl, price, quantity, selected } = cartItem.product;
  const patchCart = usePatchCart();
  const deleteCart = useDeleteCart();

  return (
    <S.Container>
      <Checkbox
        id={`${name} 상품 체크`}
        onChange={() =>
          patchCart.mutate({ cartId: cartItem.id, fieldsToUpdate: { selected: !selected } })
        }
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
          onClick={() => deleteCart.mutate(cartItem)}
        >
          <BsTrash size={25} />
        </button>
        <S.QuantityContainer>
          <S.Quantity aria-label={`${name} 수량`}>{quantity}</S.Quantity>
          <S.QuantityCotrollor>
            <button
              type="button"
              onClick={() =>
                patchCart.mutate({
                  cartId: cartItem.id,
                  fieldsToUpdate: { quantity: quantity + 1 },
                })
              }
            >
              +
            </button>
            <button
              type="button"
              disabled={quantity <= 1}
              onClick={() =>
                patchCart.mutate({
                  cartId: cartItem.id,
                  fieldsToUpdate: { quantity: quantity - 1 },
                })
              }
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
