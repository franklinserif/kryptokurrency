// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
  colors: {
    blue: {
      100: '#021c41',
      200: '#154c9d',
      300: '#1e66cf',
      400: '#2b7dfa',
      500: '#4787fa',
      600: '#79a8fb',
      700: '#a6c7fc',
    },
    danger: '#db3829',
    warning: '#ff832e',
    information: '#fddc69',
    success: '#338038',
    gray: {
      10: '#f4f4f4',
      100: '#161616',
      200: '#262626',
      300: '#262626',
      400: '#525252',
      500: '#6f6f6f',
      600: '#8d8d8d',
      700: '#a8a8a8',
      800: '#393939',
      900: '#e0e0e0',
      1000: '#e5e5e5',
    },
    dark: '#161616',
    black: '#161616',
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
    400: 400,
    500: 500,
    600: 600,
    700: 700,
  },
  controlSizes: {
    sm: '0.3rem 0.7rem',
    lg: '0.7rem 1.5rem',
    xl: '1rem 2rem',
  },
};

export { mainTheme };
