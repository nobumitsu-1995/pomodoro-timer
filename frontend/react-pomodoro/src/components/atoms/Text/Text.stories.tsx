import React from 'react'
import { Meta, Story } from '@storybook/react'

import Text, { Props } from './Text'

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    textalign: { options: ['center', 'right', 'left'] },
  },
} as Meta

const Template: Story<Props> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'text text text text text ',
  display: 'block',
  lineheight: 1,
  textalign: 'left',
  color: '#000',
  size: '1.6rem',
  bold: 'bold',
}
