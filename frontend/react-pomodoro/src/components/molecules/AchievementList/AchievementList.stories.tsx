import React from 'react'
import { Meta, Story } from '@storybook/react'

import AchievementList, { Props } from './AchievementList'

export default {
  title: 'molecules/AchievementList',
  component: AchievementList,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <AchievementList {...args} />

export const Default = Template.bind({})

Default.args = {
  achievements: [
    {
      _id: 'id',
      time: 1200120,
      uid: 'uid',
      taskId: {
        _id: 'id',
        title: 'title1',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 12001,
      uid: 'uid',
      taskId: {
        _id: 'id2',
        title:
          'title2title2title2title2title2title2title2title2title2title2title2',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 1200,
      uid: 'uid',
      taskId: {
        _id: 'id3',
        title: 'title3',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
    {
      _id: 'id',
      time: 120,
      uid: 'uid',
      taskId: {
        _id: 'id4',
        title: 'title4',
        uid: 'uid',
      },
    },
  ],
}
