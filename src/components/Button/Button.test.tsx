/**
 * @jest-environment jsdom
 */
import React from 'react';
import Button from './Button';
import ThemeProvideMock from '../../__mocks__/ThemeProviderMock';
import { mount } from 'enzyme';

describe('Button component', () => {
  const button = mount(
    <ThemeProvideMock>
      <Button variant="primary-button" handleClick={() => {}}>
        Button
      </Button>
    </ThemeProvideMock>,
  );
  it('should render a Primary Button', () => {
    expect(button).toBeTruthy();
  });

  it('should have a Button text', () => {
    expect(button.find('Button').text()).toEqual('Button');
  });
});
