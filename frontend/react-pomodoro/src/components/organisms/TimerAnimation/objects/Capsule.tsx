/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Vector3 } from '@react-three/fiber'

type Props = {
  position: Vector3
  visible: boolean
}

const Capsule: React.FC<Props> = ({ position, visible }) => {
  return (
    <mesh
      position={position}
      lookAt={() => ({ x: 0, y: 0, z: 0 })}
      visible={visible}
    >
      <capsuleGeometry args={[0.1, 1, 10, 8]} />
      <meshPhysicalMaterial color='#5fa8d3' metalness={0.3} />
    </mesh>
  )
}

export default Capsule
