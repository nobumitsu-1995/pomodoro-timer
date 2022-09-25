import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimerView from './TimerView'

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
} as ComponentMeta<typeof TimerView>

const Template: ComponentStory<typeof TimerView> = (args) => (
  <TimerView {...args} />
)

export const Default = Template.bind({})

Default.args = {
  minutes: '25',
  seconds: '00',
}
