// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  borderRadius: '5px',

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
};

export { mainTheme };
