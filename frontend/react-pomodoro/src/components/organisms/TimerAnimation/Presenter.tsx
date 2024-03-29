/* eslint-disable react/no-unknown-property */
import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import Icosahedron from './objects/Icosahedron'
import Plane from './objects/Plane'
import Capsules from './objects/Capsules'

export type Props = {
  progress: number
  isRest: boolean
}

const Presenter: React.FC<Props> = ({ progress, isRest }) => {
  return (
    <StyledDiv>
      <Canvas
        gl={{ antialias: false }}
        camera={{
          fov: 75,
          near: 0.1,
          far: 10,
          position: [0, 0, 10],
        }}
      >
        <color attach='background' args={['black']} />
        <Icosahedron />
        <Plane isRest={isRest} />
        <Plane reverse isRest={isRest} />
        <Capsules progress={progress} isRest={isRest} />
        <directionalLight position={[3, 3, 5]} />
      </Canvas>
    </StyledDiv>
  )
}

export default Presenter

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 350px;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
`
