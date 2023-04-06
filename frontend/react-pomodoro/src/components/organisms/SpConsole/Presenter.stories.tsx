import React from 'react'
import { Meta, Story } from '@storybook/react'

import SpConsole from './Presenter'

export default {
  title: 'organisms/SpConsole',
  component: SpConsole,
  argTypes: {},
  parameters: { layout: 'fullscreen' },
} as Meta

const Template: Story = (args) => (
  <SpConsole
    isLoggedIn={false}
    isOpen={true}
    content={<>accordion</>}
    touchButton={() => console.log('open')}
    {...args}
  />
)

export const IsLoggedIn = Template.bind({})
IsLoggedIn.args = {
  isLoggedIn: true,
}

export const IsLoggedOut = Template.bind({})
IsLoggedOut.args = {
  isLoggedIn: false,
}
