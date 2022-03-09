/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// eslint-disable-next-line import/no-unresolved

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary-button',
  children: 'Button',
};
