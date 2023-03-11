import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimerAnimation from './Presenter'

export default {
  title: 'organisms/TimerAnimation',
  component: TimerAnimation,
  argTypes: {},
} as ComponentMeta<typeof TimerAnimation>

const Template: ComponentStory<typeof TimerAnimation> = (args) => (
  <TimerAnimation {...args} />
)

export const Default = Template.bind({})

Default.args = {
  progress: 100,
}
