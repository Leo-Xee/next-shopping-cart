import * as S from "./style";

type IndicatorProps = {
  title: string;
  itemName: string;
  itemPrice: string;
  buttonName: string;
  onClick: () => void;
};

function Indicator({ title, itemName, itemPrice, buttonName, onClick }: IndicatorProps) {
  return (
    <S.Container>
      <S.ResultTitle>{title}</S.ResultTitle>
      <S.ResultContainer>
        <S.ResultInfo>
          <span>{itemName}</span>
          <span>{itemPrice}원</span>
        </S.ResultInfo>
        <button type="button" onClick={onClick}>
          {buttonName}
        </button>
      </S.ResultContainer>
    </S.Container>
  );
}

export default Indicator;
