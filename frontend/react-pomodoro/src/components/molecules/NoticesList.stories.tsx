import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NoticesList from './NoticesList'

export default {
  title: 'molecules/NoticesList',
  component: NoticesList,
  argTypes: {},
} as ComponentMeta<typeof NoticesList>

const Template: ComponentStory<typeof NoticesList> = (args) => (
  <NoticesList {...args} />
)

export const Default = Template.bind({})

const createNoticeArray = (n: number) => {
  return Array(n)
    .fill(0)
    .map((_, index) => {
      return {
        _id: `id${index + 1}`,
        title: `タイトル${index + 1} `.repeat(10),
        content: `内容${index + 1} `.repeat(20),
        updatedAt: '',
        createdAt: `2022/01/${('0' + (index + 1).toString()).slice(-2)}`,
        publishedAt: `2022/01/${('0' + (index + 1).toString()).slice(-2)}`,
        onClick: () => {
          console.log(`click${index + 1}`)
        },
      }
    })
}

Default.args = {
  notices: createNoticeArray(20),
}
