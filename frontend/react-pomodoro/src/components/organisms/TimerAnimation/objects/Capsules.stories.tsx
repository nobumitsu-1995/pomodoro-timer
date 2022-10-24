import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Canvas } from '@react-three/fiber'
import Capsules from './Capsules'

export default {
  title: 'organisms/TimerAnimation/Capsules',
  component: Capsules,
  argTypes: {},
  decorators: [
    (Story) => (
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 10,
          position: [0, 0, 10],
        }}
      >
        <Story />
      </Canvas>
    ),
  ],
} as ComponentMeta<typeof Capsules>

const Template: ComponentStory<typeof Capsules> = (args) => (
  <Capsules {...args} />
)

export const Default = Template.bind({})

Default.args = {}
