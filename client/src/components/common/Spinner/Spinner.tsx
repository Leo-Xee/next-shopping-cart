import Image from "next/image";

import logo from "public/bm-loading.png";
import * as S from "./style";

type SpinnerProps = {
  message: string;
};

function Spinner({ message }: SpinnerProps) {
  return (
    <div>
      <S.ImageWrapper>
        <Image src={logo} width="150px" height="150px" />
      </S.ImageWrapper>
      <S.Message>{message}</S.Message>
    </div>
  );
}

export default Spinner;
