import { useRouter } from "next/router";

import Title from "@/components/common/Title";
import Indicator from "@/components/Indicator";
import { filterPrice } from "@/shared/utils/filter";
import * as S from "./style";
import useCalcCartList from "@/hooks/useCalcCartList";
import { useDeleteCarts, useGetCarts } from "@/hooks/queries/cart";
import { usePostOrder } from "@/hooks/queries/order";
import PurchaseItem from "./PurchaseItem";
import Button from "../common/Button";
import { Cart } from "@/@types/api";

function PurchaseList() {
  const router = useRouter();

  const { data } = useGetCarts({
    select: (carts): Cart[] => carts.filter((cart) => cart.product.selected),
  });
  const deleteCarts = useDeleteCarts();
  const postOrder = usePostOrder();
  const { purchaseList, totalPrice, selectedCartIdList } = useCalcCartList(data ?? []);

  const orderSelectedCarts = () => {
    deleteCarts.mutate(selectedCartIdList);
    postOrder.mutate(purchaseList);

    router.push("/purchaseComplete");
  };

  return (
    <>
      <Title title="주문/결제" />
      <S.Container>
        <S.ListContainer>
          <S.ListHeader>주문 상품 ({data?.length}개)</S.ListHeader>
          <ul>
            {data?.map((selectedCart) => (
              <PurchaseItem key={selectedCart.id} cartItem={selectedCart} />
            ))}
          </ul>
        </S.ListContainer>
        <S.IndicatorWrapper>
          <Indicator title="결제금액" itemName="총 결제금액" itemPrice={totalPrice}>
            <Button
              buttonName={`${filterPrice(totalPrice)}원 결제하기`}
              colorType="primary"
              size="full"
              onClick={orderSelectedCarts}
            />
          </Indicator>
        </S.IndicatorWrapper>
      </S.Container>
    </>
  );
}

export default PurchaseList;
