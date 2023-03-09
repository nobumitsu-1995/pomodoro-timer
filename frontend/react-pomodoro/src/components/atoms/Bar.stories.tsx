import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Bar from './Bar'

export default {
  title: 'atoms/Bar',
  component: Bar,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Bar>

const Template: ComponentStory<typeof Bar> = (args) => <Bar {...args} />

export const Default = Template.bind({})
Default.args = { backgroundColor: '#666' }
