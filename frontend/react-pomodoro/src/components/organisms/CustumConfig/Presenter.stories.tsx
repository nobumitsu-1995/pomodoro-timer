import React from 'react'
import { Meta, Story } from '@storybook/react'

import CustumConfig, { Props } from './Presenter'

export default {
  title: 'organisms/CustumConfig',
  component: CustumConfig,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: Story<Props> = (args) => <CustumConfig {...args} />

export const Default = Template.bind({})

Default.args = {
  formItems: [
    {
      id: 'test',
      label: 'test',
      value: 1,
    },
  ],
  configLength: 1,
  changeEdit: () => console.log('edit'),
  clickUpdate: () => console.log('update'),
  onChangeSelect: () => console.log('changeSelect'),
}
