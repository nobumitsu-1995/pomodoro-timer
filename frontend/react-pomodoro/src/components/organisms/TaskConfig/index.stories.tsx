import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TaskConfig from './index'

export default {
  title: 'organisms/TaskConfig',
  component: TaskConfig,
  argTypes: {},
} as ComponentMeta<typeof TaskConfig>

const Template: ComponentStory<typeof TaskConfig> = (args) => (
  <TaskConfig {...args} />
)

export const Default = Template.bind({})

Default.args = {}
