import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CustumConfig from './index'

export default {
  title: 'organisms/CustumConfig',
  component: CustumConfig,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CustumConfig>

const Template: ComponentStory<typeof CustumConfig> = (args) => (
  <CustumConfig {...args} />
)

export const Default = Template.bind({})

Default.args = {}
