import React from 'react'
import { Meta, Story } from '@storybook/react'

import Timer, { Props } from './Presenter'

export default {
  title: 'organisms/Timer',
  component: Timer,
  argTypes: {},
} as Meta

const Template: Story<Props> = (args) => <Timer {...args} />

export const Default = Template.bind({})

Default.args = {
  time: {
    minutes: '20',
    seconds: '30',
  },
  cycleBar: {
    cycle: 5,
    leftCycle: 3,
    cycleToLongRestTime: 3,
  },
  iconButtonItems: [
    {
      name: 'play_arrow',
      disable: false,
      onClick: () => {
        console.log('play')
      },
    },
    {
      name: 'pause',
      disable: false,
      onClick: () => {
        console.log('play')
      },
    },
    {
      name: 'stop',
      disable: true,
      onClick: () => {
        console.log('play')
      },
    },
  ],
}
