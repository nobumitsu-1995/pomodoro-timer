/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'

const Icosahedron: React.FC = () => {
  const icosahedronRef = useRef<Mesh>(null)
  const { clock } = useThree()

  useFrame(() => {
    const time = clock.getElapsedTime()
    const object = icosahedronRef.current
    if (!object) return
    object.position.y = Math.sin(time * 0.5) * 1.3
    object.position.x = Math.cos(time * 0.8)
    object.rotation.x = time / 2
    object.rotation.y = time / 2
  })

  return (
    <mesh ref={icosahedronRef} position={[0, 0, 4]}>
      <icosahedronGeometry args={[2]} />
      <meshNormalMaterial transparent />
    </mesh>
  )
}

export default Icosahedron
