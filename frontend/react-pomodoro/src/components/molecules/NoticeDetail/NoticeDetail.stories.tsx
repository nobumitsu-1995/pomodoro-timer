import React from 'react'
import { Meta, Story } from '@storybook/react'

import NoticeDetail, { Props } from './NoticeDetail'

export default {
  title: 'molecules/NoticeDetail',
  component: NoticeDetail,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <NoticeDetail {...args} />

export const Default = Template.bind({})

Default.args = {
  _id: 'id',
  title: 'タイトル'.repeat(10),
  content: '内容'.repeat(30),
  updatedAt: '2022/01/01',
  createdAt: `2022/01/01`,
  publishedAt: '2022/01/01',
}
