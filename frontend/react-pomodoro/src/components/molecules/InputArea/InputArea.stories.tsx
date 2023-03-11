import React from 'react'
import { Meta, Story } from '@storybook/react'

import InputArea, { Props } from './InputArea'

export default {
  title: 'molecules/InputArea',
  component: InputArea,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <InputArea {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'id',
  label: 'input area',
  value: '',
  error: '',
  onChange: () => {
    console.log('onChange')
  },
}

export const Error = Template.bind({})
Error.args = {
  id: 'id',
  label: 'input area',
  value: '',
  error: 'error text',
  onChange: () => {
    console.log('onChange')
  },
}
