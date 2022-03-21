import React from 'react';
import DataTable from './DataTable';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter, Routes } from 'react-router-dom';

export default {
  title: 'DataTable',
  component: DataTable,
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => (
  <BrowserRouter>
    <DataTable {...args} />
  </BrowserRouter>
);

export const Table = Template.bind({});
Table.args = {
  tableHead: ['Name', 'Protocol', 'Port', 'Rule', 'Attached Group', 'Status'],
  data: [
    {
      name: 'Load Balancer 3',
      protocol: 'HTTP',
      port: 3000,
      rule: 'Rounded robin',
      attachedGroup: 'Kevins VM Groups',
      status: 'disable',
    },
    {
      name: 'Load Balancer 4',
      protocol: 'HTTP',
      port: 3000,
      rule: 'Rounded robin',
      attachedGroup: 'Kevins VM Groups',
      status: 'disable',
    },
  ],
};
