/**
 * @jest-environment jsdom
 */
import React from 'react';
import ThemeProvideMock from '../../__mocks__/ThemeProviderMock';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Button from '../../components/Button/Button';

describe('Button component', () => {
  const button = shallow(
    <ThemeProvideMock>
      <Button variant="primary-button" handleClick={() => {}}>
        Button
      </Button>
    </ThemeProvideMock>,
  );
  console.log(button);
  it('Should render a Primery Button', () => {
    expect(button.length).toEqual(1);
  });

  it('should have a Button text', () => {
    expect(button.find('Button').text()).toEqual('<Button />');
  });
});

describe('button Snapshot', () => {
  it('test UI of Button component', () => {
    const button = create(
      <ThemeProvideMock>
        <Button variant="primary-button" handleClick={() => {}}>
          Button
        </Button>
      </ThemeProvideMock>,
    );
    expect(button).toMatchSnapshot();
  });
});
