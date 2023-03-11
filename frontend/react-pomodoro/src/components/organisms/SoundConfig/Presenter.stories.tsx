import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SoundConfig from './Presenter'

export default {
  title: 'organisms/SoundConfig',
  component: SoundConfig,
  argTypes: {},
} as ComponentMeta<typeof SoundConfig>

const Template: ComponentStory<typeof SoundConfig> = (args) => (
  <SoundConfig {...args} />
)

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
