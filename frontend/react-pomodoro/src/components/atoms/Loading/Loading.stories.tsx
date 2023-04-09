import React from 'react'
import { Meta, Story } from '@storybook/react'

import Loading from './Loading'

export default {
  title: 'atoms/Loading',
  component: Loading,
} as Meta

const Template: Story = (args) => <Loading {...args} />

export const Default = Template.bind({})
