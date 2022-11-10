import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputArea from './InputArea'

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
} as ComponentMeta<typeof InputArea>

const Template: ComponentStory<typeof InputArea> = (args) => (
  <InputArea {...args} />
)

export const Default = Template.bind({})

Default.args = {
  id: 'id',
  label: 'input area',
  value: '',
  error: 'error',
  onChange: () => {
    console.log('onChange')
  },
}
