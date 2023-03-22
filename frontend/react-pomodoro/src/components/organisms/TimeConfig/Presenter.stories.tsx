import React from 'react'
import { Meta, Story } from '@storybook/react'

import TimeConfig, { Props } from './Presenter'

export default {
  title: 'organisms/TimeConfig',
  component: TimeConfig,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <TimeConfig {...args} />

export const Default = Template.bind({})

Default.args = {
  consoleItems: [
    {
      icon: 'work',
      title: 'work\ntime',
      value: 1,
      error: 'error1',
      onClickUp: () => console.log('up'),
      onClickDown: () => console.log('down'),
    },
    {
      icon: 'local_cafe',
      title: 'rest\ntime',
      value: 2,
      error: 'error2',
      onClickUp: () => console.log('up'),
      onClickDown: () => console.log('down'),
    },
  ],
}
