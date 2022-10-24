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

Default.args = {
  notice: {
    id: `id`,
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
