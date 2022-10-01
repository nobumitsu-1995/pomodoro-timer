import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Notice from './index'

export default {
  title: 'organisms/Notice',
  component: Notice,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof Notice>

const Template: ComponentStory<typeof Notice> = (args) => <Notice {...args} />

export const Default = Template.bind({})

Default.args = {}
