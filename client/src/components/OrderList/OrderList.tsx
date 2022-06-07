import { useQuery } from "react-query";
import { useRouter } from "next/router";

import Title from "@/components/common/Title";
import Indicator from "@/components/Indicator";
import cartService from "@/services/cartService";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import useCalcCartList from "@/hooks/useCalcCartList";
import useCartListMutation from "@/hooks/apis/cart/useCartListMutation";
import useOrderMutation from "@/hooks/apis/order/useOrderMutation";
import OrderItem from "./OrderItem";

function OrderList() {
  const router = useRouter();

  const { data } = useQuery("/carts", cartService.getCarts, {
    select: (carts) => carts.filter((cart) => cart.product.selected),
  });
  const { deleteSelectedCarts } = useCartListMutation();
  const { addOrder } = useOrderMutation();
  const { orderList, totalPrice, selectedCartIdList } = useCalcCartList(data ?? []);

  const orderSelectedCarts = () => {
    deleteSelectedCarts(selectedCartIdList);
    addOrder(orderList);

    router.push("/orderComplete");
  };

  return (
    <>
      <Title title="주문/결제" />
      <S.Container>
        <S.ListContainer>
          <S.ListHeader>주문 상품 ({data?.length}개)</S.ListHeader>
          <ul>
            {data?.map((selectedCart) => (
              <OrderItem key={selectedCart.id} cartItem={selectedCart} />
            ))}
          </ul>
        </S.ListContainer>
        <S.IndicatorWrapper>
          <Indicator
            title="결제금액"
            itemName="총 결제금액"
            itemPrice={totalPrice}
            buttonName={`${filterPrice(totalPrice)}원 결제하기`}
            onClick={orderSelectedCarts}
          />
        </S.IndicatorWrapper>
      </S.Container>
    </>
  );
}

export default OrderList;
