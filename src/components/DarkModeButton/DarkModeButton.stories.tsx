import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DarkModeButton from './DarkModeButton';

export default {
  title: 'DarkModeButton',
  component: DarkModeButton,
} as ComponentMeta<typeof DarkModeButton>;

const Template: ComponentStory<typeof DarkModeButton> = (args) => <DarkModeButton {...args} />;

export const DarkModeButtonST = Template.bind({});
DarkModeButtonST.args = {
  handleDarkModeChange: (e, setDarkMode) => setDarkMode((prevDarkModeState) => !prevDarkModeState),
};
