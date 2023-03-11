import React from 'react'
import { Meta, Story } from '@storybook/react'

import IconButtonList, { Props } from './IconButtonList'

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
} as Meta

const Template: Story<Props> = (args) => <IconButtonList {...args} />

export const Default = Template.bind({})

Default.args = {
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
      disable: true,
      onClick: () => {
        console.log('pause')
      },
    },
    {
      name: 'stop',
      disable: false,
      onClick: () => {
        console.log('stop')
      },
    },
  ],
}
