import React from 'react';
import themeProviderTypes from './themeProviders.types';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes/mainTheme';

const Theme = ({ children }: themeProviderTypes) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default Theme;
