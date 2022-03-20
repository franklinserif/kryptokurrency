import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/themes/GlobalStyles';
import { mainTheme } from '../src/themes/mainTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withA11y);

export const decorators = [
  (Story) => (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      {Story()}
    </ThemeProvider>
  ),
];

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
