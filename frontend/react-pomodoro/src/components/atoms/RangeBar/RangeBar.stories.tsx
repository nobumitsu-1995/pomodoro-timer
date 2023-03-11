import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RangeBar from './RangeBar'

export default {
  title: 'atoms/RangeBar',
  component: RangeBar,
  argTypes: {},
} as ComponentMeta<typeof RangeBar>

const Template: ComponentStory<typeof RangeBar> = (args) => (
  <RangeBar {...args} />
)

export const Default = Template.bind({})

Default.args = {
  width: 300,
}
