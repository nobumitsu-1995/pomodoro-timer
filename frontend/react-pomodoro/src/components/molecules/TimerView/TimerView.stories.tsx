import React from 'react'
import { Meta, Story } from '@storybook/react'

import TimerView, { Props } from './TimerView'

export default {
  title: 'molecules/TimerView',
  component: TimerView,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <TimerView {...args} />

export const Default = Template.bind({})

Default.args = {
  minutes: '25',
  seconds: '00',
}
