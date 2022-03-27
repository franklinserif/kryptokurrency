import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalWindow = Template.bind({});
ModalWindow.args = {
  children: <div>Hello</div>,
};
