import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AuthButton from './AuthButton'

export default {
  title: 'molecules/AuthButton',
  component: AuthButton,
  argTypes: {},
} as ComponentMeta<typeof AuthButton>

const Template: ComponentStory<typeof AuthButton> = (args) => (
  <AuthButton {...args} />
)

export const LogInButton = Template.bind({})
LogInButton.args = {
  isLoggedIn: false,
}

export const LogOutButton = Template.bind({})
LogInButton.args = {
  isLoggedIn: true,
}
