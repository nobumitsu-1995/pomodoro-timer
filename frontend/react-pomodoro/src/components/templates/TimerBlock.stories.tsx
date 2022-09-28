import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TimerBlock from './TimerBlock'

export default {
  title: 'templates/TimerBlock',
  component: TimerBlock,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TimerBlock>

const Template: ComponentStory<typeof TimerBlock> = (args) => (
  <TimerBlock {...args} />
)

export const Default = Template.bind({})

Default.args = {}
