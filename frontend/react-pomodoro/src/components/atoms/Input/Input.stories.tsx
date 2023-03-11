import React from 'react'
import { Meta, Story } from '@storybook/react'

import Input, { Props } from './Input'

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  fontsize: '1.6rem',
  borderradius: '3px',
  placeholder: 'placeholder',
}
