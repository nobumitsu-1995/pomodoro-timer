import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimerCycleBar from './TimerCycleBar'

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
} as ComponentMeta<typeof TimerCycleBar>

const Template: ComponentStory<typeof TimerCycleBar> = (args) => (
  <TimerCycleBar {...args} />
)

export const Default = Template.bind({})

Default.args = {
  cycle: 5,
  leftCycle: 3,
}
