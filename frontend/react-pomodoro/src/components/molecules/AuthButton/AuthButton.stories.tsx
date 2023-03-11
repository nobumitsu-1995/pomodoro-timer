import React from 'react'
import { Meta, Story } from '@storybook/react'

import AuthButton, { Props } from './AuthButton'

export default {
  title: 'molecules/AuthButton',
  component: AuthButton,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <AuthButton {...args} />

export const LogInButton = Template.bind({})
LogInButton.args = {
  isLoggedIn: false,
}

export const LogOutButton = Template.bind({})
LogInButton.args = {
  isLoggedIn: true,
}
