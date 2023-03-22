import React from 'react'
import { Meta, Story } from '@storybook/react'

import RangeBar, { Props } from './RangeBar'

export default {
  title: 'atoms/RangeBar',
  component: RangeBar,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <RangeBar {...args} />

export const Default = Template.bind({})

Default.args = {
  width: 300,
}
