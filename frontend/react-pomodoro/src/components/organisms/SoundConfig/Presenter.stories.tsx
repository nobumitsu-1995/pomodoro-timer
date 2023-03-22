import React from 'react'
import { Meta, Story } from '@storybook/react'

import SoundConfig, { Props } from './Presenter'

export default {
  title: 'organisms/SoundConfig',
  component: SoundConfig,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <SoundConfig {...args} />

export const IsNotMute = Template.bind({})
IsNotMute.args = {
  isMuted: false,
  value: 50,
}

export const IsMute = Template.bind({})
IsMute.args = {
  isMuted: true,
  value: 0,
}
