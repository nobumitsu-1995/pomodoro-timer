import React from 'react'
import { Meta, Story } from '@storybook/react'

import Paper, { Props } from './Paper'

export default {
  title: 'atoms/Paper',
  component: Paper,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <Paper {...args} />

export const Default = Template.bind({})

Default.args = {
  padding: '30px',
  children: `${'paper '.repeat(200)}`,
}
