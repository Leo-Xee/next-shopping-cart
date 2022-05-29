import * as S from "./style";

type CheckboxProps = {
  id: string;
  label?: string;
  checked?: boolean;
  onClick: () => void;
};

function Checkbox({ id, label, checked, onClick }: CheckboxProps) {
  return (
    <S.Container>
      <S.Label htmlFor={id} onClick={onClick}>
        <input id={id} type="checkbox" checked={checked} />
        <span />
      </S.Label>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
}

export default Checkbox;
