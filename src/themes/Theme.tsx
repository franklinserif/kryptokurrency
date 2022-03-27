import React, { ReactNode } from 'react';
import { mainTheme } from './mainTheme';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ThemePropsType } from './Theme.types';
import { GlobalStyles } from './GlobalStyles';

/**
 * ThemeProviderMocs, it provide theme styles for all his childs components
 * @param {Object} props
 * @param {ReactNode} props.children
 * @returns {JSX.Element}
 */
const Theme: React.FC<ThemePropsType> = ({ children }: ThemePropsType) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
