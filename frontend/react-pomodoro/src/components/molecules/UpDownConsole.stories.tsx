import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import UpDownConsole from './UpDownConsole'

export default {
  title: 'molecules/UpDownConsole',
  component: UpDownConsole,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '170px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof UpDownConsole>

const Template: ComponentStory<typeof UpDownConsole> = (args) => (
  <UpDownConsole {...args} />
)

export const Default = Template.bind({})

Default.args = {
  icon: 'work',
  title: 'sample',
  value: 25,
}
