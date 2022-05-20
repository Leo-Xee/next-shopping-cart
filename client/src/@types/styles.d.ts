import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    light: {
      maxWidth: string;
      minWidth: string;
      primary: string;
      white: string;
    };
  }
}
