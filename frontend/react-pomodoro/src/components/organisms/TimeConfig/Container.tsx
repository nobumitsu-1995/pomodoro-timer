import React, { useCallback, useState } from 'react'
import {
  incrementWorkTime as reduxIncrementWorktime,
  decrementWorkTime as reduxDecrementWorktime,
  incrementRestTime as reduxIncrementResttime,
  decrementRestTime as reduxDecrementResttime,
} from '../../../feature/slices/timerConfig'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../../feature/store'
import {
  restTimeSelector,
  workTimeSelector,
} from '../../../feature/selectors/timerConfig'
import Presenter from './Presenter'

const Container: React.FC = () => {
  const [error, setError] = useState({ work: '', rest: '' })
  const dispatch = useDispatch()

  const globalWorkTime = useSelector(workTimeSelector) / 60
  const globalRestTime = useSelector(restTimeSelector) / 60

  const incrementWorkTime = useCallback(() => {
    if (globalWorkTime === 60) {
      return setError({ ...error, work: 'too big' })
    }
    setError({ ...error, work: '' })
    dispatch(reduxIncrementWorktime())
  }, [dispatch, globalWorkTime])

  const decrementWorkTime = useCallback(() => {
    if (globalWorkTime === 5) {
      return setError({ ...error, work: 'too small' })
    }
    setError({ ...error, work: '' })
    dispatch(reduxDecrementWorktime())
  }, [dispatch, globalWorkTime])

  const incrementRestTime = useCallback(() => {
    if (globalRestTime === 60) {
      return setError({ ...error, rest: 'too big' })
    }
    setError({ ...error, rest: '' })
    dispatch(reduxIncrementResttime())
  }, [dispatch, globalRestTime])

  const decrementRestTime = useCallback(() => {
    if (globalRestTime === 5) {
      return setError({ ...error, rest: 'too small' })
    }
    setError({ ...error, rest: '' })
    dispatch(reduxDecrementResttime())
  }, [dispatch, globalRestTime])

  const consoleItems = [
    {
      icon: 'work',
      title: 'work\ntime',
      value: globalWorkTime,
      error: error.work,
      onClickUp: incrementWorkTime,
      onClickDown: decrementWorkTime,
    },
    {
      icon: 'local_cafe',
      title: 'rest\ntime',
      value: globalRestTime,
      error: error.rest,
      onClickUp: incrementRestTime,
      onClickDown: decrementRestTime,
    },
  ]

  return <Presenter consoleItems={consoleItems} />
}

export default Container
