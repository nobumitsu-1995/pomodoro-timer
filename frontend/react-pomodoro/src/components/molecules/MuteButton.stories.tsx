import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MuteButton from './MuteButton'

export default {
  title: 'molecules/MuteButton',
  component: MuteButton,
  argTypes: {},
} as ComponentMeta<typeof MuteButton>

const Template: ComponentStory<typeof MuteButton> = (args) => (
  <MuteButton {...args} />
)

export const isMute = Template.bind({})
isMute.args = {
  isMuted: true,
  size: '45px',
  borderRadius: '10px',
}

export const isNotMute = Template.bind({})
isNotMute.args = {
  isMuted: false,
  size: '45px',
  borderRadius: '10px',
}
