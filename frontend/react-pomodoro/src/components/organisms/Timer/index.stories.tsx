import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Timer from './index'

export default {
  title: 'organisms/Timer',
  component: Timer,
  argTypes: {},
} as ComponentMeta<typeof Timer>

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />

export const Default = Template.bind({})

Default.args = {}
