import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Timer from './Presenter'

export default {
  title: 'organisms/Timer',
  component: Timer,
  argTypes: {},
} as ComponentMeta<typeof Timer>

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />

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
