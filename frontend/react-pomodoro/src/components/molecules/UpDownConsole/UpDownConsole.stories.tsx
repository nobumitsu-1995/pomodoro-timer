import React from 'react'
import { Story, Meta } from '@storybook/react'

import UpDownConsole, { Props } from './UpDownConsole'

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
} as Meta

const Template: Story<Props> = (args) => <UpDownConsole {...args} />

export const Default = Template.bind({})

Default.args = {
  icon: 'work',
  title: 'sample',
  value: 25,
}
