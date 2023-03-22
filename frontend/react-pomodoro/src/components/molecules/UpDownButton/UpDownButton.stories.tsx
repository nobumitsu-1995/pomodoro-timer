import React from 'react'
import { Meta, Story } from '@storybook/react'

import UpDownButton, { Props } from './UpDownButton'

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
} as Meta

const Template: Story<Props> = (args) => <UpDownButton {...args} />

export const Default = Template.bind({})

Default.args = {}
