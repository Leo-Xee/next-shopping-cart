import { useState } from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";

import * as S from "./style";
import { Cart } from "@/@types/api";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import cartService from "@/services/cartService";

type CartItemProps = {
  cartItem: Cart;
  setCartList: React.Dispatch<React.SetStateAction<[] | Cart[]>>;
};

function CartItem({ cartItem, setCartList }: CartItemProps) {
  // const [quantity, setQuantity] = useState(0);

  const productsPrice = cartItem.product.price * cartItem.product.quantity;

  const checkHandler = () => {};

  const plusClickHandler = () => {
    cartService.updateQuantity(cartItem.id, cartItem.product.quantity + 1);
    setCartList((prev) =>
      prev.map((cart) => {
        if (cart.id === cartItem.id) {
          return {
            id: cart.id,
            product: {
              ...cart.product,
              quantity: cart.product.quantity + 1,
            },
          };
        }
        return cart;
      }),
    );
  };

  const minusClickHandler = () => {
    const value = cartItem.product.quantity;
    if (value <= 1) return;
    cartService.updateQuantity(cartItem.id, cartItem.product.quantity - 1);
    setCartList((prev) =>
      prev.map((cart) => {
        if (cart.id === cartItem.id) {
          return {
            id: cart.id,
            product: {
              ...cart.product,
              quantity: cart.product.quantity - 1,
            },
          };
        }
        return cart;
      }),
    );
  };

  const deleteHandler = () => {
    cartService.deleteCartItem(cartItem.id);
    setCartList((prev) => prev.filter((cart) => cart.id !== cartItem.id));
  };

  return (
    <S.Container>
      <Checkbox id={`check__${cartItem.product.name}`} onClick={checkHandler} />
      <Image
        src={cartItem.product.imageUrl}
        alt={cartItem.product.name}
        width="200px"
        height="200px"
      />
      <S.Name>{cartItem.product.name}</S.Name>
      <S.Controllor>
        <button
          type="button"
          aria-label={`${cartItem.product.name} 상품 삭제하기`}
          onClick={deleteHandler}
        >
          <BsTrash size={25} />
        </button>
        <S.QuantityContainer>
          <S.Quantity>{cartItem.product.quantity}</S.Quantity>
          <S.QuantityCotrollor>
            <button type="button" onClick={plusClickHandler}>
              +
            </button>
            <button type="button" onClick={minusClickHandler}>
              -
            </button>
          </S.QuantityCotrollor>
        </S.QuantityContainer>
        <S.TotalPrice>{filterPrice(productsPrice)} 원</S.TotalPrice>
      </S.Controllor>
    </S.Container>
  );
}

export default CartItem;
