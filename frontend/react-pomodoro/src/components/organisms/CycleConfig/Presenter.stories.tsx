import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CycleConfig from './Presenter'

export default {
  title: 'organisms/CycleConfig',
  component: CycleConfig,
  argTypes: {},
} as ComponentMeta<typeof CycleConfig>

const Template: ComponentStory<typeof CycleConfig> = (args) => (
  <CycleConfig {...args} />
)

export const Default = Template.bind({})

Default.args = {
  value: 25,
  error: 'error',
  onChange: () => console.log('change'),
  onClick: () => console.log('click'),
}
