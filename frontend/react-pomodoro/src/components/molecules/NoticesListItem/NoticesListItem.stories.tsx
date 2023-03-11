import React from 'react'
import { Meta, Story } from '@storybook/react'

import NoticesListItem, { Props } from './NoticesListItem'

export default {
  title: 'molecules/NoticesListItem',
  component: NoticesListItem,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <NoticesListItem {...args} />

export const Default = Template.bind({})

Default.args = {
  notice: {
    _id: `id`,
    title: `タイトル`.repeat(10),
    content: `内容`.repeat(20),
    updatedAt: '2022/01/01',
    createdAt: `2022/01/01`,
    publishedAt: '2022/01/01',
  },
  setCurrentNotice: () => {
    console.log('click')
  },
}
