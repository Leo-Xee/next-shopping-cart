import Image from "next/image";

import error from "public/bm-error.png";
import empty from "public/bm-empty.png";
import * as S from "./style";

type ErrorBannerProps = {
  type: "empty" | "error";
};

function ErrorBanner({ type }: ErrorBannerProps) {
  if (type === "empty") {
    return (
      <S.Container>
        <S.ImageWrapper>
          <Image src={empty} width="200px" height="200px" />
        </S.ImageWrapper>
        <S.Message>아직 아무것도 없어요...</S.Message>
      </S.Container>
    );
  }

  if (type === "error") {
    return (
      <S.Container>
        <S.ImageWrapper>
          <Image src={error} width="220px" height="90px" />
        </S.ImageWrapper>
        <S.Message>
          이용에 불편을 드려 죄송합니다. <br /> 홈으로 이동하셔서 다시 한번 이용해주세요.
        </S.Message>
      </S.Container>
    );
  }

  return null;
}

export default ErrorBanner;
