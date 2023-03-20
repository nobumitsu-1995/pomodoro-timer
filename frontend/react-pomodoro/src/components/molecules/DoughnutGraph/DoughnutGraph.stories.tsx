import React from 'react'
import { Meta, Story } from '@storybook/react'

import DoughnutGraph, { Props } from './DoughnutGraph'

export default {
  title: 'molecules/DoughnutGraph',
  component: DoughnutGraph,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <DoughnutGraph {...args} />

export const Default = Template.bind({})

Default.args = {
  labels: ['work1', 'work2', 'work3'],
  datas: [300, 50, 100, 20, 200, 14, 122, 94, 124],
}
