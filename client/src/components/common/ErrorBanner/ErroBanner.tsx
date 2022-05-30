import Image from "next/image";

import error from "public/bm-error.png";
import * as S from "./style";

function ErroBanner() {
  return (
    <div>
      <S.ImageWrapper>
        <Image src={error} width="220px" height="90px" />
      </S.ImageWrapper>
      <S.Message>
        이용에 불편을 드려 죄송합니다. <br /> 홈으로 이동하셔서 다시 한번 이용해주세요.
      </S.Message>
    </div>
  );
}

export default ErroBanner;
