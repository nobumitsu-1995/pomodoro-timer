/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { AdditiveBlending, Mesh, TextureLoader } from 'three'
import Texture from '../../../../assets/images/ring.png'

type Props = {
  reverse?: boolean
}

const Plane: React.FC<Props> = ({ reverse = false }) => {
  const planeRef = useRef<Mesh>(null)
  const { clock } = useThree()
  const colorMap = useLoader(TextureLoader, Texture)

  useFrame(() => {
    const time = clock.getElapsedTime()
    const object = planeRef.current
    if (!object) return
    object.rotation.z = reverse ? -time / 2 : time / 8
  })

  return (
    <mesh ref={planeRef} position={[0, 0, 0]}>
      <planeGeometry args={[30, 30, 2, 100]} />
      <meshBasicMaterial
        map={colorMap}
        color='#007eff'
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </mesh>
  )
}

export default Plane
