import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';
import { Search32 } from '@carbon/icons-react';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  variant: 'lg',
  placeholder: 'write some text',
  light: false,
};

export const SearchInput = Template.bind({});
SearchInput.args = {
  type: 'search',
  variant: 'lg',
  placeholder: 'write some text',
  light: false,
  children: <Search32 aria-label="search" className="input-icon" />,
};
