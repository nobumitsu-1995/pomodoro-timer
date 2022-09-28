import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import UpDownButton from './UpDownButton'

export default {
  title: 'molecules/UpDownButton',
  component: UpDownButton,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof UpDownButton>

const Template: ComponentStory<typeof UpDownButton> = (args) => (
  <UpDownButton {...args} />
)

export const Default = Template.bind({})

Default.args = {}
