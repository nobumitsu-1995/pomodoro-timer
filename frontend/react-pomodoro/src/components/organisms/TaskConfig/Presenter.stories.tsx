import React from 'react'
import { Meta, Story } from '@storybook/react'

import TaskConfig, { Props } from './Presenter'

export default {
  title: 'organisms/TaskConfig',
  component: TaskConfig,
  argTypes: {},
  args: {
    task: {
      title: 'title',
      id: 'id',
    },
    tasks: [
      {
        title: 'title1',
        _id: 'id1',
        uid: '',
      },
      {
        title: 'title2',
        _id: 'id2',
        uid: '',
      },
    ],
    currentTask: {
      title: 'title1',
      _id: 'id1',
      uid: '',
    },
  },
} as Meta

const Template: Story<Props> = (args) => <TaskConfig {...args} />

export const ShowMode = Template.bind({})
ShowMode.args = {
  isEditMode: false,
}

export const EditMode = Template.bind({})
EditMode.args = {
  isEditMode: true,
}

export const Error = Template.bind({})
Error.args = {
  error: 'error',
}

export const NoData = Template.bind({})
NoData.args = {
  tasks: [],
}
