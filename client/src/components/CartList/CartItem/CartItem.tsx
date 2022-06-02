import Image from "next/image";
import { BsTrash } from "react-icons/bs";

import { useMutation, useQueryClient } from "react-query";
import * as S from "./style";
import { Cart } from "@/@types/api";
import Checkbox from "@/components/common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import cartService from "@/services/cartService";

const useCartItemMutation = (cartItem: Cart) => {
  const queryClient = useQueryClient();

  const afterMutationHandler = {
    onSuccess: () => {
      queryClient.invalidateQueries("/carts");
    },
  };
  const updateQuantityMutation = useMutation(
    (newQuantity: number) => cartService.updateQuantity(cartItem.id, newQuantity),
    afterMutationHandler,
  );

  const dropMutation = useMutation(
    () => cartService.deleteCartItem(cartItem.id),
    afterMutationHandler,
  );

  return {
    plus: () => updateQuantityMutation.mutate(cartItem.product.quantity + 1),
    minus: () => updateQuantityMutation.mutate(cartItem.product.quantity - 1),
    drop: dropMutation.mutate,
  };
};

type CartItemProps = {
  cartItem: Cart;
};

function CartItem({ cartItem }: CartItemProps) {
  const { plus, minus, drop } = useCartItemMutation(cartItem);

  const productsPrice = cartItem.product.price * cartItem.product.quantity;

  return (
    <S.Container>
      <Checkbox id={`check__${cartItem.product.name}`} onClick={() => plus()} />
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
          onClick={() => drop()}
        >
          <BsTrash size={25} />
        </button>
        <S.QuantityContainer>
          <S.Quantity>{cartItem.product.quantity}</S.Quantity>
          <S.QuantityCotrollor>
            <button type="button" onClick={() => plus()}>
              +
            </button>
            <button type="button" onClick={() => minus()}>
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
