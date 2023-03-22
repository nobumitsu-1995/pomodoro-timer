import React from 'react'
import { Meta, Story } from '@storybook/react'

import Bar, { Props } from './Bar'

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
} as Meta

const Template: Story<Props> = (args) => <Bar {...args} />

export const Default = Template.bind({})
Default.args = { backgroundColor: '#666' }
