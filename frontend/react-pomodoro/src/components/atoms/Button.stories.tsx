import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Button',
  size: '100px',
}
