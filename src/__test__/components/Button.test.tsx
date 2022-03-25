/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow, mount, MountRendererProps } from 'enzyme';
import { create } from 'react-test-renderer';
import Button from '../../components/Button/Button';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import ThemeProviderMock from '../../__mocks__/ThemeProviderMock';

describe('Button component', () => {
  const shallowWithTheme = (tree: React.ReactElement<any>, theme: DefaultTheme) => {
    const WrappingThemeProvider: React.FC<{ children: React.ReactChild }> = (props) => (
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    );

    return mount(
      tree,
      { wrappingComponent: WrappingThemeProvider } as MountRendererProps, //Override typing because @types/enzyme doesn't have wrappingComponent yet https://github.com/DefinitelyTyped/DefinitelyTyped/pull/36667
    );
  };
  /* 
  const button = shallowWithTheme(
    <Button variant="primary-button" handleClick={() => {}}>
      Text
    </Button>,
    mainTheme,
  ); */

  it('sould render correctly in debug mode', () => {
    const button = create(
      <ThemeProviderMock>
        <Button variant="primary-button" handleClick={() => {}}>
          Text
        </Button>
      </ThemeProviderMock>,
    );
    expect(button.toJSON()).toMatchSnapshot();
  });
});
