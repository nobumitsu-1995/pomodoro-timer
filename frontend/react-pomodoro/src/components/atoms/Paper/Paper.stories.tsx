import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Paper from './Paper'

export default {
  title: 'atoms/Paper',
  component: Paper,
  argTypes: {},
} as ComponentMeta<typeof Paper>

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />

export const Default = Template.bind({})

Default.args = {
  padding: '30px',
  children: `${'paper '.repeat(200)}`,
}
