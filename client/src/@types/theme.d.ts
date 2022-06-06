import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    maxWidth: string;
    minWidth: string;
    box_shadow_color: string;
    primary: string;
    primary_highlight: string;
    default: string;
    black: string;
    white: string;
    brown: string;
    gray: string;
    gray_dark: string;
    gray_light: string;
  }
}
