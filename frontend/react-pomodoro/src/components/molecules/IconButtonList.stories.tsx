import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconButtonList from './IconButtonList'

export default {
  title: 'molecules/IconButtonList',
  component: IconButtonList,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof IconButtonList>

const Template: ComponentStory<typeof IconButtonList> = (args) => (
  <IconButtonList {...args} />
)

export const Default = Template.bind({})

Default.args = {
  iconButtonItems: [
    {
      name: 'play',
      icon: <span className='material-icons'>play_arrow</span>,
      disable: false,
      onClick: () => {
        console.log('play')
      },
    },
    {
      name: 'pause',
      icon: <span className='material-icons'>pause</span>,
      disable: true,
      onClick: () => {
        console.log('pause')
      },
    },
    {
      name: 'stop',
      icon: <span className='material-icons'>stop</span>,
      disable: false,
      onClick: () => {
        console.log('stop')
      },
    },
  ],
}
