import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimerConfig from './index'

export default {
  title: 'organisms/TimerConfig',
  component: TimerConfig,
  argTypes: {},
} as ComponentMeta<typeof TimerConfig>

const Template: ComponentStory<typeof TimerConfig> = (args) => (
  <TimerConfig {...args} />
)

export const Default = Template.bind({})

Default.args = {}
