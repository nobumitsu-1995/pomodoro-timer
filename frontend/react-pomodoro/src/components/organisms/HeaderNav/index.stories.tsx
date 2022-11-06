import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import HeaderNav from './index'

export default {
  title: 'organisms/HeaderNav',
  component: HeaderNav,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof HeaderNav>

const Template: ComponentStory<typeof HeaderNav> = (args) => (
  <HeaderNav {...args} />
)

export const Default = Template.bind({})

Default.args = {}
