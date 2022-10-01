import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimeTag from './TimeTag'

export default {
  title: 'atoms/TimeTag',
  component: TimeTag,
  argTypes: {},
} as ComponentMeta<typeof TimeTag>

const Template: ComponentStory<typeof TimeTag> = (args) => <TimeTag {...args} />

export const Default = Template.bind({})

Default.args = {
  time: '2022/01/01',
}
