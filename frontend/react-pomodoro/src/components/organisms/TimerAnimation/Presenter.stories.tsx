import React from 'react'
import { Meta, Story } from '@storybook/react'

import TimerAnimation, { Props } from './Presenter'

export default {
  title: 'organisms/TimerAnimation',
  component: TimerAnimation,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <TimerAnimation {...args} />

export const Default = Template.bind({})

Default.args = {
  progress: 100,
}
