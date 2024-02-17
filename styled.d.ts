import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      foreground: string;
      background: string;
      backgroundStart: string;
      backgroundMid: string;
      backgroundEnd: string;
      main: string;
      secondary: string;
      gray: string;
      red: string;
      pink: string;
      purple: string;
      orange: string;
      yellow: string;
      tealBlue: string;
      blue: string;
      green: string;
      dark: string;
      light: string;
    };
  }
}
