import { ChangeEventHandler } from "react";

import * as S from "./style";

type CheckboxProps = {
  id: string;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function Checkbox({ id, label, checked, disabled, onChange }: CheckboxProps) {
  return (
    <S.Container>
      <S.Label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          aria-label={id}
        />
        <span />
        <S.Text>{label}</S.Text>
      </S.Label>
    </S.Container>
  );
}

export default Checkbox;
