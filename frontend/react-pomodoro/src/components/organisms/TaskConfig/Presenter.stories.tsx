import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TaskConfig from './Presenter'

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
} as ComponentMeta<typeof TaskConfig>

const Template: ComponentStory<typeof TaskConfig> = (args) => (
  <TaskConfig {...args} />
)

export const ShowMode = Template.bind({})
ShowMode.args = {
  isEditMode: false,
}

export const EditMode = Template.bind({})
EditMode.args = {
  isEditMode: true,
}
