import { useQuery } from "react-query";

import * as S from "./style";
import cartService from "@/services/cartService";
import CartItem from "./CartItem";
import Checkbox from "../common/Checkbox/Checkbox";
import { filterPrice } from "@/shared/utils/filter";
import Spinner from "../common/Spinner";
import ErrorBanner from "../common/ErrorBanner";
import { Cart } from "@/@types/api";

const useCartList = () => {
  return useQuery("/carts", cartService.getCarts);
};

// SSR 확인하기
// useMutate 사용하기
function CartList() {
  const checkAllHandler = () => {};
  const { isLoading, isError, data: cartList } = useCartList();

  return (
    <>
      <S.Title>장바구니</S.Title>
      {isLoading ? (
        <Spinner message="로딩 중..." />
      ) : isError ? (
        <ErrorBanner />
      ) : (
        <S.Container>
          <S.List>
            <S.CheckController>
              <Checkbox id="select" onClick={checkAllHandler} label="전체 선택" />
              <button type="button">상품 삭제</button>
            </S.CheckController>
            <S.ListHeader>든든배송 상품 (3개)</S.ListHeader>
            {cartList &&
              cartList.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />)}
          </S.List>
          <S.Indicator>
            <S.ResultTitle>결제예상금액</S.ResultTitle>
            <S.ResultContainer>
              <S.ResultInfo>
                <span>결제예상금액</span>
                <span>{filterPrice(100000)}원</span>
              </S.ResultInfo>
              <button type="button">주문하기(2개)</button>
            </S.ResultContainer>
          </S.Indicator>
        </S.Container>
      )}
    </>
  );
}

export default CartList;
