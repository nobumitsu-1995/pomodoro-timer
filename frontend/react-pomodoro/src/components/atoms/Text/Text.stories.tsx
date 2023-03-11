import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from './Text'

export default {
  title: 'atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
    textalign: { options: ['center', 'right', 'left'] },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

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
