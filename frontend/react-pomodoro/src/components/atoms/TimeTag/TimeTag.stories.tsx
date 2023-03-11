import React from 'react'
import { Meta, Story } from '@storybook/react'

import TimeTag, { Props } from './TimeTag'

export default {
  title: 'atoms/TimeTag',
  component: TimeTag,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <TimeTag {...args} />

export const Default = Template.bind({})

Default.args = {
  time: '2022/01/01',
}
