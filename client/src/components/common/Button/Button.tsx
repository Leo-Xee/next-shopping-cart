import { MouseEventHandler } from "react";

import StyledButton from "./style";

export type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonName: string;
  colorType: "default" | "primary" | "brown";
  size: "default" | "full";
};

function Button({ onClick, buttonName, colorType, size }: ButtonProps) {
  return (
    <StyledButton type="button" size={size} colorType={colorType} onClick={onClick}>
      {buttonName}
    </StyledButton>
  );
}

export default Button;
