import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cycleSelector } from '../../../feature/selectors'
import { useSelector } from '../../../feature/store'
import { updateCycle as reduxUpdateCycle } from '../../../feature/slices/timerConfig'
import Presenter from './Presenter'

const index: React.FC = () => {
  const dispatch = useDispatch()
  const updateCycle = useCallback(
    (cycle: number) => {
      dispatch(reduxUpdateCycle(cycle))
    },
    [dispatch]
  )
  const globalCycle = useSelector(cycleSelector)
  const [cycle, setCycle] = useState(globalCycle)
  const [error, setError] = useState('')

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _cycle = Number(e.target.value)
    if (_cycle > 10) {
      setError('Only numbers 1-10 are allowed.')
      return setCycle(10)
    } else if (_cycle < 1) {
      setError('Only numbers 1-10 are allowed.')
      return setCycle(1)
    } else {
      setError('')
    }
    setCycle(Number(_cycle))
  }

  const handleClickButton = () => {
    if (error && (cycle > 10 || cycle < 1)) {
      return console.log(error)
    }
    setError('')
    updateCycle(cycle)
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
