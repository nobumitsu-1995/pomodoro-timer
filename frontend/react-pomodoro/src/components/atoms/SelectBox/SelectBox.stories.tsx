import React from 'react'
import { Meta, Story } from '@storybook/react'

import SelectBox, { Props } from './SelectBox'

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
} as Meta

const Template: Story<Props> = (args) => <SelectBox {...args} />

export const Default = Template.bind({})

Default.args = {
  configLength: 5,
  onChange: () => {
    console.log('onChange')
  },
}
