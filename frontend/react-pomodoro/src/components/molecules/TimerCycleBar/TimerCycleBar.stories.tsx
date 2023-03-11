import React from 'react'
import { Meta, Story } from '@storybook/react'

import TimerCycleBar, { Props } from './TimerCycleBar'

export default {
  title: 'molecules/TimerCycleBar',
  component: TimerCycleBar,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <TimerCycleBar {...args} />

export const Default = Template.bind({})

Default.args = {
  cycle: 5,
  leftCycle: 3,
  cycleToLongRestTime: 2,
}
