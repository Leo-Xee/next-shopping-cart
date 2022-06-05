import { useQuery } from "react-query";
import { useRouter } from "next/router";

import * as S from "./style";
import cartService from "@/services/cartService";
import CartItem from "./CartItem";
import Checkbox from "../common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import Spinner from "../common/Spinner";
import ErrorBanner from "../common/ErrorBanner";
import useCalcCartList from "@/hooks/useCalcCartList";
import useCartListMutation from "@/hooks/apis/cart/useCartListMutation";

// SSR 확인하기
function CartList() {
  const router = useRouter();
  const { isLoading, isError, data } = useQuery("/carts", cartService.getCarts);
  const { updateSelectedAll, deleteSelectedCarts } = useCartListMutation();

  const { totalPrice, totalCount, isEmpty, isSelectedAll, selectedCartIdList } = useCalcCartList(
    data ?? [],
  );

  return (
    <>
      <S.Title>장바구니</S.Title>
      {isLoading ? (
        <Spinner message="로딩 중..." />
      ) : isError ? (
        <ErrorBanner />
      ) : (
        <S.Container>
          <S.ListContainer>
            <S.CheckController>
              <Checkbox
                id="select"
                onChange={() => updateSelectedAll(isSelectedAll)}
                checked={isSelectedAll}
                disabled={isEmpty}
                label={isSelectedAll ? "전체 해제" : "전체 선택"}
              />
              <button type="button" onClick={() => deleteSelectedCarts(selectedCartIdList)}>
                상품 삭제
              </button>
            </S.CheckController>
            <S.ListHeader>든든배송 상품 ({data?.length}개)</S.ListHeader>
            <ul>
              {data && data.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
            </ul>
          </S.ListContainer>
          <S.Indicator>
            <S.ResultTitle>결제예상금액</S.ResultTitle>
            <S.ResultContainer>
              <S.ResultInfo>
                <span>결제예상금액</span>
                <span>{filterPrice(totalPrice ?? 0)}원</span>
              </S.ResultInfo>
              <button type="button" onClick={() => router.push("/order")}>
                주문하기({totalCount}개)
              </button>
            </S.ResultContainer>
          </S.Indicator>
        </S.Container>
      )}
    </>
  );
}

export default CartList;
