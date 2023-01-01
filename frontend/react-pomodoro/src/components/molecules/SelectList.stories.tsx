import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SelectList from './SelectList'

export default {
  title: 'molecules/SelectList',
  component: SelectList,
  argTypes: {},
} as ComponentMeta<typeof SelectList>

const Template: ComponentStory<typeof SelectList> = (args) => (
  <SelectList {...args} />
)

export const Default = Template.bind({})

const createNoticeArray = (n: number) => {
  return Array(n)
    .fill(0)
    .map((_, index) => {
      return {
        _id: `id${index + 1}`,
        uid: `id${index + 1}`,
        title: `タイトル${index + 1} `.repeat(10),
      }
    })
}

Default.args = {
  listItem: createNoticeArray(20),
  activeId: 'id10',
}
