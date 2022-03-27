import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingH1 = Template.bind({});
HeadingH1.args = {
  children: 'Title 1',
  headingLevel: 'h1',
  dark: true,
};
