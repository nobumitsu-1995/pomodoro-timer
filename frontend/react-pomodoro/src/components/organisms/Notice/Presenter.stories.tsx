import React from 'react'
import { Meta, Story } from '@storybook/react'

import Notice, { Props } from './Presenter'

export default {
  title: 'organisms/Notice',
  component: Notice,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as Meta

const Template: Story<Props> = (args) => <Notice {...args} />

export const Detail = Template.bind({})
Detail.args = {
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

export const List = Template.bind({})
List.args = {
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
}
