import React, { createContext } from 'react';
import themeProviderTypes from './themeProviders.types';
import { DefaultTheme } from 'styled-components';
import { mainTheme } from '../../themes/mainTheme';

export const themeContext = createContext<DefaultTheme | null>(null);

const ThemeProvider = ({ children }: themeProviderTypes) => {
  return <themeContext.Provider value={mainTheme}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
