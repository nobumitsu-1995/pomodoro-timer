import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import HeaderNav from './Presenter'

export default {
  title: 'organisms/HeaderNav',
  component: HeaderNav,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof HeaderNav>

const Template: ComponentStory<typeof HeaderNav> = (args) => (
  <HeaderNav {...args} />
)

export const isLoggedIn = Template.bind({})
isLoggedIn.args = {
  listButtons: [
    {
      modalContent: <></>,
      icon: 'notifications',
      isHide: false,
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
    },
  ],
  isLoggedIn: false,
}
