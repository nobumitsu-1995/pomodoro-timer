import React from 'react'
import { Button } from '../../atoms'

export type Props = {
  isMuted: boolean
  size: string
  borderRadius: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MuteButton: React.FC<Props> = ({
  isMuted,
  size,
  borderRadius,
  onClick,
}) => {
  return (
    <Button size={size} borderradius={borderRadius} onClick={onClick}>
      <span className='material-icons md-18'>
        {isMuted ? 'volume_off' : 'volume_up'}
      </span>
    </Button>
  )
}

export default MuteButton
