import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarketInfo from './MarketInfo';

export default {
  title: 'MarkInfo',
  component: MarketInfo,
} as ComponentMeta<typeof MarketInfo>;

const Template: ComponentStory<typeof MarketInfo> = (args) => <MarketInfo {...args} />;

export const MarketInformation = Template.bind({});
MarketInformation.args = {
  title: 'Title',
  data: '50%',
  dark: true,
};
