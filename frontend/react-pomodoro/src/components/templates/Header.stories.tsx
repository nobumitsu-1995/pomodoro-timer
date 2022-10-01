import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Header from './Header'
import { ModalProvider } from '../../lib/functions/ModalContext'
import { ModalBody } from '../organisms'

export default {
  title: 'templates/Header',
  component: Header,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
        <ModalBody />
      </ModalProvider>
    ),
  ],
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {}
