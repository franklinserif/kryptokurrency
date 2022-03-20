import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HamburgerButton from './HamburgerButton';

export default {
  title: 'HamburgerButton',
  component: HamburgerButton,
} as ComponentMeta<typeof HamburgerButton>;

const Template: ComponentStory<typeof HamburgerButton> = (args) => <HamburgerButton {...args} />;

export const Hamburger = Template.bind({});
Hamburger.args = {
  handleClick: () => console.log('click'),
};
