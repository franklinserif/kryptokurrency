import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavigationBar = Template.bind({});
NavigationBar.args = {
  children: (
    <ul className="navigation-menu">
      <li className="menu-item">
        <a href="#">Coins</a>
      </li>
      <li className="menu-item">
        <a href="#">Exchanges</a>
      </li>
      <li className="menu-item">
        <a href="#">Swap</a>
      </li>
    </ul>
  ),
};
