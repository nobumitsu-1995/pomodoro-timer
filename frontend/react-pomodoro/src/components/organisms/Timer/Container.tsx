import React from 'react'
import {
  cycleSelector,
  cycleToLongRestTimeSelector,
  longRestTimeSelector,
  restTimeSelector,
  workTimeSelector,
} from '../../../feature/selectors/timerConfig'
import { volumeSelector } from 'src/feature/selectors/soundConfig'
import {
  endTimeSelector,
  leftTimeSelector,
  statusSelector,
} from 'src/feature/selectors/timerStatus'
import { currentTaskSelector } from 'src/feature/selectors/task'
import { tokenGetSelector } from 'src/feature/selectors/token'
import { useSelector } from '../../../feature/store'
import Presenter from './Presenter'
import { useDispatch } from 'react-redux'
import useSoundConfig from 'src/lib/hooks/useSoundConfig'
import useTimer from 'src/lib/hooks/useTimer'
import { setEndTime, updateStatus } from 'src/feature/slices/timerStatus'

const Container: React.FC = () => {
  const dispatch = useDispatch()
  const volume = useSelector(volumeSelector)

  const { playWorkFinish, playRestFinish } = useSoundConfig(volume)

  const cycle = useSelector(cycleSelector)
  const workTime = useSelector(workTimeSelector)
  const restTime = useSelector(restTimeSelector)
  const longRestTime = useSelector(longRestTimeSelector)
  const cycleToLongRestTime = useSelector(cycleToLongRestTimeSelector)
  const leftTime = useSelector(leftTimeSelector)
  const status = useSelector(statusSelector)
  const endTime = useSelector(endTimeSelector)
  const taskId = useSelector(currentTaskSelector)._id || null
  const token = useSelector(tokenGetSelector)

  const { leftCycle, time, resetTimer } = useTimer({
    playRestFinish,
    playWorkFinish,
    cycle,
    workTime,
    restTime,
    longRestTime,
    cycleToLongRestTime,
    leftTime,
    status,
    endTime,
    taskId,
    token,
  })

  const iconButtonItems = [
    {
      name: 'play_arrow',
      disable:
        status === 'running' || status === 'rest' || status === 'longRest'
          ? true
          : false,
      onClick: () => {
        dispatch(updateStatus('running'))
        dispatch(setEndTime(leftTime))
      },
    },
    {
      name: 'pause',
      disable: status === 'pause' || status === 'stop' ? true : false,
      onClick: () => {
        dispatch(updateStatus('pause'))
      },
    },
    {
      name: 'stop',
      disable: status === 'stop',
      onClick: () => {
        if (confirm('タイマーを中断してよろしいですか？')) {
          resetTimer()
        }
      },
    },
  ]

  return (
    <Presenter
      time={time}
      iconButtonItems={iconButtonItems}
      cycleBar={{
        cycle: cycle,
        leftCycle: leftCycle,
        cycleToLongRestTime: cycleToLongRestTime,
      }}
    />
  )
}

export default Container
