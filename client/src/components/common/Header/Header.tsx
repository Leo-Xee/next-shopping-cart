import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

import * as S from "./style";

function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Left>
          <span>
            <BsCart4 size={40} color="#ffffff" />
          </span>
          <Link href="/">
            <a>WOOWA SHOP</a>
          </Link>
        </S.Left>
        <S.Right>
          <Link href="/carts">
            <a>장바구니</a>
          </Link>
          <Link href="/orders">
            <a>주문목록</a>
          </Link>
        </S.Right>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
