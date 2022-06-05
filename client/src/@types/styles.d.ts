import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    light: {
      maxWidth: string;
      minWidth: string;
      box_shadow_color: string;
      primary: string;
      primary_light: string;
      white: string;
      brown: string;
      gray_dark: string;
      gray_medium: string;
      gray_light: string;
    };
  }
}
