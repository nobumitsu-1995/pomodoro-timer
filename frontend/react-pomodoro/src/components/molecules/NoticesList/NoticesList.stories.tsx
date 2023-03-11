import React from 'react'
import { Meta, Story } from '@storybook/react'

import NoticesList, { Props } from './NoticesList'

export default {
  title: 'molecules/NoticesList',
  component: NoticesList,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <NoticesList {...args} />

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

export const Default = Template.bind({})
Default.args = {
  notices: createNoticeArray(20),
  setCurrentNotice: () => {
    console.log('')
  },
}

export const NoData = Template.bind({})
NoData.args = {
  notices: createNoticeArray(0),
  setCurrentNotice: () => {
    console.log('')
  },
}
