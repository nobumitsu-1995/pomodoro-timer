import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './Input'

export default {
  title: 'atoms/Input',
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  fontsize: '1.6rem',
  borderradius: '3px',
  placeholder: 'placeholder',
}
