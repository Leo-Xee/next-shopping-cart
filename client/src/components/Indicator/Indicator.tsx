import { filterPrice } from "@/shared/utils/filter";

import * as S from "./style";

type IndicatorProps = {
  title: string;
  itemName: string;
  itemPrice: number;
  children?: React.ReactNode;
  width?: string;
};

function Indicator({ title, itemName, itemPrice, width = "100%", children }: IndicatorProps) {
  return (
    <S.Container width={width}>
      <S.ResultTitle>{title}</S.ResultTitle>
      <S.ResultContainer>
        <S.ResultInfo>
          <span>{itemName}</span>
          <span>{filterPrice(itemPrice)}원</span>
        </S.ResultInfo>
        {children}
      </S.ResultContainer>
    </S.Container>
  );
}

export default Indicator;
