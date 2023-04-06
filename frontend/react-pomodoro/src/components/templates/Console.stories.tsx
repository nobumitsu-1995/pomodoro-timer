import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Console from './Console'
import { ModalProvider } from '../../lib/functions/ModalContext'
import { ModalBody } from '../organisms'

export default {
  title: 'templates/Console',
  component: Console,
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
} as ComponentMeta<typeof Console>

const Template: ComponentStory<typeof Console> = (args) => <Console {...args} />

export const Default = Template.bind({})

Default.args = {}
