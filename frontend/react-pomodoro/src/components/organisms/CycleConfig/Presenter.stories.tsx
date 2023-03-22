import React from 'react'
import { Meta, Story } from '@storybook/react'

import CycleConfig, { Props } from './Presenter'

export default {
  title: 'organisms/CycleConfig',
  component: CycleConfig,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <CycleConfig {...args} />

export const Default = Template.bind({})

Default.args = {
  value: 25,
  error: 'error',
  onChange: () => console.log('change'),
}
