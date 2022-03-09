import React, { ReactNode } from 'react';
import { mainTheme } from './mainTheme';
import { ThemeProvider } from 'styled-components';
import { ThemePropsType } from './Theme.types';
import { GlobalStyles } from './GlobalStyles';

/**
 * Theme component, it provide theme styles for all his childs components
 * @param {Object} props
 * @param {ReactNode} children
 * @returns {JSX.Element}
 */
const Theme = ({ children }: ThemePropsType) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      children
    </ThemeProvider>
  );
};

export default Theme;
