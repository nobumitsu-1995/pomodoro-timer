import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Canvas } from '@react-three/fiber'
import Plane from './Plane'

export default {
  title: 'organisms/TimerAnimation/Plane',
  component: Plane,
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
} as ComponentMeta<typeof Plane>

const Template: ComponentStory<typeof Plane> = (args) => <Plane {...args} />

export const Default = Template.bind({})

Default.args = {
  reverse: false,
}

export const IsRest = Template.bind({})
IsRest.args = {
  isRest: true,
}
