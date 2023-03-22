import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cycleSelector } from '../../../feature/selectors/timerConfig'
import { useSelector } from '../../../feature/store'
import { updateCycle as reduxUpdateCycle } from '../../../feature/slices/timerConfig'
import Presenter from './Presenter'
import { validateCycle } from 'src/lib/functions/validation'

const Container: React.FC = () => {
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

  useEffect(() => {
    setCycle(globalCycle)
  }, [globalCycle])

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _cycle = Number(e.target.value)
    setError(validateCycle(_cycle))
    setCycle(Number(_cycle))
  }

  const handleClickButton = () => {
    const _error = validateCycle(cycle)
    setError(_error)
    if (_error) return
    updateCycle(cycle)
  }

  const handleOnClickUp = () => {
    const _cycle = cycle + 1
    const _error = validateCycle(_cycle)
    setError(_error)

    if (_error) return
    setCycle(_cycle)
    updateCycle(_cycle)
  }

  const handleOnClickDown = () => {
    const _cycle = cycle - 1
    const _error = validateCycle(_cycle)
    setError(_error)

    if (_error) return
    setCycle(_cycle)
    updateCycle(_cycle)
  }

  return (
    <Presenter
      value={cycle}
      error={error}
      onChange={handleChangeInput}
      onClick={handleClickButton}
      onClickUp={handleOnClickUp}
      onClickDown={handleOnClickDown}
    />
  )
}

export default Container
