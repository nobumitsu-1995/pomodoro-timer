import React from 'react'
import { Meta, Story } from '@storybook/react'

import Button, { Props } from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  fontsize: '',
  size: '100px',
  borderradius: '',
}
