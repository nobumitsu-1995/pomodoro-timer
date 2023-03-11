import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SelectBox from './SelectBox'

export default {
  title: 'atoms/SelectBox',
  component: SelectBox,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SelectBox>

const Template: ComponentStory<typeof SelectBox> = (args) => (
  <SelectBox {...args} />
)

export const Default = Template.bind({})

Default.args = {
  configLength: 5,
  onChange: () => {
    console.log('onChange')
  },
}
