import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimeConfig from './index'

export default {
  title: 'organisms/TimeConfig',
  component: TimeConfig,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TimeConfig>

const Template: ComponentStory<typeof TimeConfig> = (args) => (
  <TimeConfig {...args} />
)

export const Default = Template.bind({})

Default.args = {}
