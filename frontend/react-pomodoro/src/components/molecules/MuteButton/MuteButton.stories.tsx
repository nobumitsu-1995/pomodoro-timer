import React from 'react'
import { Meta, Story } from '@storybook/react'

import MuteButton, { Props } from './MuteButton'

export default {
  title: 'molecules/MuteButton',
  component: MuteButton,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <MuteButton {...args} />

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
