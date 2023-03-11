import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Notice from './Presenter'

export default {
  title: 'organisms/Notice',
  component: Notice,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as ComponentMeta<typeof Notice>

const Template: ComponentStory<typeof Notice> = (args) => <Notice {...args} />

export const Default = Template.bind({})

Default.args = {
  notices: [
    {
      _id: '',
      title: 'title',
      content: 'content',
      updatedAt: '2023/01/01',
      createdAt: '2023/01/01',
      publishedAt: '2023/01/01',
    },
  ],
  notice: {
    _id: '',
    title: 'title',
    content: 'content',
    updatedAt: '2023/01/01',
    createdAt: '2023/01/01',
    publishedAt: '2023/01/01',
  },
}
