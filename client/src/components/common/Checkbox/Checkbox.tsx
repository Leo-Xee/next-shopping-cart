import * as S from "./style";

type CheckboxProps = {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
};

function Checkbox({ id, label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <S.Container>
      <S.Label htmlFor={id}>
        <input id={id} type="checkbox" onChange={onChange} checked={checked} disabled={disabled} />
        <span />
      </S.Label>
      <S.Text>{label}</S.Text>
    </S.Container>
  );
}

export default Checkbox;
