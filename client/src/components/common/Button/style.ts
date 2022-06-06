import styled from "@emotion/styled";
import { lighten, darken } from "polished";
import { css, Theme } from "@emotion/react";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "buttonName">;

const SIZE = {
  default: css`
    padding: 12px 8px;
    font-size: 1.6rem;
    font-weight: 400;
  `,
  full: css`
    padding: 16px 12px;
    width: 100%;
    font-size: 2.2rem;
    font-weight: 500;
  `,
};

const setColor = (theme: Theme, colorType: StyledButtonProps["colorType"]) => css`
  color: ${colorType !== "default" ? theme.light.white : theme.light.black};
  background-color: ${theme.light[colorType]};

  &:hover {
    background-color: ${lighten(0.1, `${theme.light[colorType]}`)};
  }

  &:active {
    background-color: ${darken(0.1, `${theme.light[colorType]}`)};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${({ size }) => SIZE[size]}
  ${({ theme, colorType }) => setColor(theme, colorType)}
`;

export default StyledButton;
