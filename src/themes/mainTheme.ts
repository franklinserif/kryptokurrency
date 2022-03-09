// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    blue: {
      100: '#e5e5ff',
      200: '#b3b3ff',
      300: '#8080ff',
      400: '#8080ff',
      500: '#1a1aff',
      600: '#0000e6',
      700: '#0000b3',
    },
    gray: {
      100: '#262626',
      200: '#404040',
      300: '#595959',
      400: '#737373',
      500: '#8c8c8c',
      600: '#a6a6a6',
      700: '#a6a6a6',
    },
    black: '#000',
    white: '#fff',
  },
  fontSize: {
    100: 12,
    200: 15,
    300: 18,
    400: 21,
    500: 24,
    600: 27,
    700: 30,
    800: 33,
    900: 36,
  },
  fontWeight: {
    300: 300,
    500: 500,
    600: 600,
    700: 700,
  },
};

export { mainTheme };
