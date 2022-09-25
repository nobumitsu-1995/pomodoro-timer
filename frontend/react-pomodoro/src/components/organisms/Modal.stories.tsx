import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ModalButton from './ModalButton'
import { ModalProvider } from '../../lib/functions/ModalContext'
import ModalBody from './ModalBody'

export default {
  title: 'organisms/Modal',
  component: ModalButton,
  argTypes: {},
  decorators: [
    (Story) => (
      <ModalProvider>
        <ModalBody />
        <div style={{ maxWidth: '320px', margin: 'auto' }}>
          <Story />
        </div>
      </ModalProvider>
    ),
  ],
} as ComponentMeta<typeof ModalButton>

const Template: ComponentStory<typeof ModalButton> = (args) => (
  <ModalButton {...args} />
)

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  modalContent: (
    <>
      <p>modal</p>
      <p>modal</p>
      <p>modal</p>
      <p>modal</p>
      <p>modal</p>
      <p>modal</p>
      <p>modal</p>
    </>
  ),
  borderradius: '20px',
}
