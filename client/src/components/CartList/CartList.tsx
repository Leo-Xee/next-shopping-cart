import { useQuery } from "react-query";
import { useRouter } from "next/router";

import * as S from "./style";
import cartService from "@/services/cartService";
import CartItem from "./CartItem";
import Checkbox from "../common/Checkbox/Checkbox";
import useCalcCartList from "@/hooks/useCalcCartList";
import Indicator from "../Indicator";
import Button from "../common/Button";
import Title from "../common/Title/Title";
import useCartMutation from "@/hooks/apis/useCartMutation";
import ErrorBanner from "../common/ErrorBanner";

function CartList() {
  const router = useRouter();

  const { data } = useQuery("/carts", cartService.getCarts);
  const { updateSelectedAll, deleteSelectedCarts } = useCartMutation();

  const { totalPrice, totalCount, isEmpty, isSelectedAll, selectedCartIdList } = useCalcCartList(
    data ?? [],
  );

  return (
    <>
      <Title title="장바구니" />
      <S.Container>
        <S.ListContainer>
          <S.CheckController>
            <Checkbox
              id="전체 체크"
              onChange={() => updateSelectedAll(isSelectedAll)}
              checked={isSelectedAll}
              disabled={isEmpty}
              label={isSelectedAll ? "전체 해제" : "전체 선택"}
            />
            <Button
              buttonName="상품 삭제"
              colorType="default"
              size="default"
              onClick={() => deleteSelectedCarts(selectedCartIdList)}
              disabled={totalCount === 0}
            />
          </S.CheckController>
          <S.ListHeader>든든배송 상품 ({data?.length || 0}개)</S.ListHeader>
          {data?.length !== 0 ? (
            <ul>
              {data && data.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </ul>
          ) : (
            <ErrorBanner type="empty" />
          )}
        </S.ListContainer>
        <S.IndicatorWrapper>
          <Indicator title="결제예상금액" itemName="총 결제예상금액" itemPrice={totalPrice}>
            <Button
              buttonName={`주문하기(${totalCount}개)`}
              colorType="primary"
              size="full"
              disabled={totalCount === 0}
              onClick={() => router.push("/purchase")}
            />
          </Indicator>
        </S.IndicatorWrapper>
      </S.Container>
    </>
  );
}

export default CartList;
