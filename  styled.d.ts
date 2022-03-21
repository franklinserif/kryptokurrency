// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
      };
      danger: string;
      warning: string;
      information: string;
      success: string;
      gray: {
        10: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      dark: string;
      black: string;
      white: string;
    };
    fontSize: {
      100: number;
      200: number;
      300: number;
      400: number;
      500: number;
      600: number;
      700: number;
      800: number;
      900: number;
    };
    fontWeight: {
      300: number;
      400: number;
      500: number;
      600: number;
      700: number;
    };
    controlSizes: {
      sm: string;
      lg: string;
      xl: string;
    };
  }
}
