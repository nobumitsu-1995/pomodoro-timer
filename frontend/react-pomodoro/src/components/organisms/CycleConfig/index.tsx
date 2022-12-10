import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cycleSelector } from '../../../feature/selectors'
import { useSelector } from '../../../feature/store'
import { updateCycle as reduxUpdateCycle } from '../../../feature/slices/timerConfig'
import Presenter from './Presenter'
import { validateCycle } from 'src/lib/functions/validation'

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
    const _error = validateCycle(_cycle)
    setError(_error)
    if (_error) return
    setCycle(Number(_cycle))
  }

  const handleClickButton = () => {
    const _error = validateCycle(cycle)
    setError(_error)
    if (_error) return
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
