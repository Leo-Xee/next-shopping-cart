import { MouseEventHandler } from "react";

import StyledButton from "./style";

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonName: string;
  colorType: "default" | "primary" | "brown";
  size: "default" | "full";
  disabled?: boolean;
};

function Button({ onClick, buttonName, colorType, size, disabled }: ButtonProps) {
  return (
    <StyledButton
      type="button"
      size={size}
      colorType={colorType}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </StyledButton>
  );
}

export default Button;
