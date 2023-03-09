import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Form from './Form'

export default {
  title: 'molecules/Form',
  component: Form,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />

export const Default = Template.bind({})

Default.args = {
  formItems: [
    {
      id: 'id1',
      label: 'label1',
      value: 5,
    },
    {
      id: 'id2',
      label: 'label2',
      value: 5,
    },
    {
      id: 'id3',
      label: 'label3',
      value: 5,
    },
  ],
  onChange: () => {
    console.log('onChange')
  },
  onClick: () => {
    console.log('onClick')
  },
  buttonText: 'button',
}
