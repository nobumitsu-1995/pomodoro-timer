import React, { useState } from 'react'
import Presenter from './Presenter'

const index: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false)

  const handleClickButton = () => {
    setIsMuted(!isMuted)
  }

  return <Presenter isMuted={isMuted} onClick={handleClickButton} />
}

export default index
