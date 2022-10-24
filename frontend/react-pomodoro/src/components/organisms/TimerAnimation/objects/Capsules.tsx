import React from 'react'
import Capsule from './Capsule'
import { Vector3 } from 'three'

type Props = {
  progress: number
}

const Capsules: React.FC<Props> = ({ progress }) => {
  return (
    <>
      {new Array(360).fill(0).map((_, i) => {
        const r = 7
        const rad = (i * Math.PI) / 180 + (Math.PI * 2) / 180 + Math.PI / 2
        const x = -r * Math.cos(rad)
        const y = r * Math.sin(rad)
        const position = new Vector3(x, y, 0)
        const visible = i >= 360 * progress

        return <Capsule key={i} position={position} visible={visible} />
      })}
    </>
  )
}

export default Capsules
