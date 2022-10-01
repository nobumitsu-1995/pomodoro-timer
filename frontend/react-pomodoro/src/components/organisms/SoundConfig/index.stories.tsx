import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SoundConfig from './index'

export default {
  title: 'organisms/SoundConfig',
  component: SoundConfig,
  argTypes: {},
} as ComponentMeta<typeof SoundConfig>

const Template: ComponentStory<typeof SoundConfig> = (args) => (
  <SoundConfig {...args} />
)

export const Default = Template.bind({})

Default.args = {}
