import React from 'react'
import { Meta, Story } from '@storybook/react'

import UserAchievement, { Props } from './Presenter'

export default {
  title: 'organisms/UserAchievement',
  component: UserAchievement,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <UserAchievement {...args} />

export const Default = Template.bind({})

Default.args = {
  labels: ['work1', 'work2', 'work3'],
  datas: [300, 50, 100, 20, 200, 14, 122, 94, 124],
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

export const NoAchievement = Template.bind({})

NoAchievement.args = {
  labels: [],
  datas: [],
  achievements: [],
}
