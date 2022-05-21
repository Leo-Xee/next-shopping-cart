import { useRouter } from "next/router";
import { BsCart4 } from "react-icons/bs";

import * as S from "./style";

function Header() {
  const router = useRouter();
  return (
    <S.Wrapper>
      <S.Container>
        <S.Left>
          <span>
            <BsCart4 size={40} color="#ffffff" />
          </span>
          <button type="button" onClick={() => router.push("/")}>
            WOOWA SHOP
          </button>
        </S.Left>
        <S.Right>
          <button type="button" onClick={() => router.push("/cart")}>
            장바구니
          </button>
          <button type="button" onClick={() => router.push("/order")}>
            주문목록
          </button>
        </S.Right>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
