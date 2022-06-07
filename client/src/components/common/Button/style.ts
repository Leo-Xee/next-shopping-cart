import styled from "@emotion/styled";
import { lighten, darken } from "polished";
import { css, Theme } from "@emotion/react";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "buttonName">;

const isDefault = (colorType: StyledButtonProps["colorType"]) => colorType === "default";

const SIZE = {
  default: css`
    padding: 12px;
    font-size: 1.6rem;
    font-weight: 400;
  `,
  full: css`
    padding: 12px 10px;
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
  `,
};

const setColor = (theme: Theme, colorType: StyledButtonProps["colorType"]) => css`
  color: ${isDefault(colorType) ? theme.black : theme.white};
  border: 1px solid ${isDefault(colorType) && theme.gray_light};
  background-color: ${theme[colorType]};

  &:hover {
    background-color: ${lighten(0.1, theme[colorType])};
  }

  &:active {
    background-color: ${darken(0.1, theme[colorType])};
  }

  &:disabled {
    border-color: ${isDefault(colorType) && lighten(0.15, theme.gray_light)};
    color: ${isDefault(colorType) && lighten(0.6, theme.black)};
    background-color: ${lighten(0.3, theme[colorType])};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${({ size }) => SIZE[size]}
  ${({ theme, colorType }) => setColor(theme, colorType)}
`;

export default StyledButton;
