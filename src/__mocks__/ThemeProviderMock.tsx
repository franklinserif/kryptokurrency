import React, { ReactNode } from 'react';
import { mainTheme } from '../themes/mainTheme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ThemePropsType } from '../themes/Theme.types';
import { GlobalStyles } from '../themes/GlobalStyles';

/**
 * Theme component, it provide theme styles for all his childs components
 * @param {Object} props
 * @param {ReactNode} children
 * @returns {JSX.Element}
 */
const ThemeProviderMock: React.FC<ThemePropsType> = ({ children }: ThemePropsType) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
export default ThemeProviderMock;
