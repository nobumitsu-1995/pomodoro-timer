import React from 'react'
import { Meta, Story } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import ModalButton, { Props } from './ModalButton'
import { ModalProvider } from '../../../lib/functions/ModalContext'
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
} as Meta

const Template: Story<Props> = (args) => <ModalButton {...args} />

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

export const isOpen = Template.bind({})
isOpen.args = {
  ...Default.args,
}
isOpen.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByText('Button'))
}
