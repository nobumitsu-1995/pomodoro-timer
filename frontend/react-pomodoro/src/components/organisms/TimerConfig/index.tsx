import React, { useState } from 'react'
import Presenter from './Presenter'

const index: React.FC = () => {
  const [cycle, setCycle] = useState(3)
  const [error, setError] = useState('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _cycle = Number(e.target.value)
    if (_cycle > 10) {
      setError('Only numbers 1-10 are allowed.')
      return setCycle(11)
    } else if (_cycle <= 0) {
      setError('Only numbers 1-10 are allowed.')
      return setCycle(0)
    } else {
      setError('')
    }
    setCycle(Number(_cycle))
  }

  const handleClickButton = () => {
    if (error) {
      return console.log(error)
    }
    console.log(cycle)
  }

  return (
    <Presenter
      value={cycle}
      error={error}
      onChange={handleChangeInput}
      onClick={handleClickButton}
    />
  )
}

export default index
