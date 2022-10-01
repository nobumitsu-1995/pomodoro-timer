import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NoticesListItem from './NoticesListItem'

export default {
  title: 'molecules/NoticesListItem',
  component: NoticesListItem,
  argTypes: {},
} as ComponentMeta<typeof NoticesListItem>

const Template: ComponentStory<typeof NoticesListItem> = (args) => (
  <NoticesListItem {...args} />
)

export const Default = Template.bind({})

Default.args = {}
