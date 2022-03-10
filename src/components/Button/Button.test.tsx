import React from 'react';
import Button from './Button';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Button component', () => {
  it('should render a Primary Button', () => {
    const wrapper = shallow(
      <Button variant="primary-button" handleClick={() => {}}>
        {'Button'}
      </Button>,
    );

    expect(wrapper).toBeTruthy();
  });
});
