import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NoticeDetail from './NoticeDetail'

export default {
  title: 'molecules/NoticeDetail',
  component: NoticeDetail,
  argTypes: {},
} as ComponentMeta<typeof NoticeDetail>

const Template: ComponentStory<typeof NoticeDetail> = (args) => (
  <NoticeDetail {...args} />
)

export const Default = Template.bind({})

Default.args = {
  id: 'id',
  title: 'タイトル'.repeat(10),
  content: '内容'.repeat(30),
  updatedAt: '2022/01/01',
  createdAt: `2022/01/01`,
  publishedAt: '2022/01/01',
}
