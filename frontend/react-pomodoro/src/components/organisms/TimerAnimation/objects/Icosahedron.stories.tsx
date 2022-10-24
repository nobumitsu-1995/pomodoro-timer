import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Canvas } from '@react-three/fiber'
import Icosahedron from './Icosahedron'

export default {
  title: 'organisms/TimerAnimation/Icosahedron',
  component: Icosahedron,
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
} as ComponentMeta<typeof Icosahedron>

const Template: ComponentStory<typeof Icosahedron> = (args) => (
  <Icosahedron {...args} />
)

export const Default = Template.bind({})

Default.args = {}
