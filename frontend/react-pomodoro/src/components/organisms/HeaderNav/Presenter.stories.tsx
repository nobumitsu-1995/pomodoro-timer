import React from 'react'
import { Meta, Story } from '@storybook/react'

import HeaderNav, { Props } from './Presenter'

export default {
  title: 'organisms/HeaderNav',
  component: HeaderNav,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as Meta

const Template: Story<Props> = (args) => <HeaderNav {...args} />

export const isLoggedIn = Template.bind({})
isLoggedIn.args = {
  listButtons: [
    {
      modalContent: <></>,
      icon: 'notifications',
      isHide: false,
      desc: 'Notifications',
    },
  ],
  isLoggedIn: true,
}

export const isLoggedOut = Template.bind({})
isLoggedOut.args = {
  listButtons: [
    {
      modalContent: <></>,
      icon: 'notifications',
      isHide: false,
      desc: 'Notifications',
    },
  ],
  isLoggedIn: false,
}
