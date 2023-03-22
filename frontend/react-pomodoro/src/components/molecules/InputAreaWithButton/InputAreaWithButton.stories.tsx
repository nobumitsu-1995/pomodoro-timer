import React from 'react'
import { Meta, Story } from '@storybook/react'

import InputAreaWithButton, { Props } from './InputAreaWithButton'

export default {
  title: 'molecules/InputAreaWithButton',
  component: InputAreaWithButton,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <InputAreaWithButton {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '',
  error: '',
  placeholder: 'placeholder',
}

export const Error = Template.bind({})
Error.args = {
  value: '',
  error: 'error text',
  placeholder: 'placeholder',
}
