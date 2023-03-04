import React from 'react'
import {
  currentTaskSelector,
  cycleSelector,
  cycleToLongRestTimeSelector,
  leftTimeSelector,
  longRestTimeSelector,
  restTimeSelector,
  statusSelector,
  tokenGetSelector,
  volumeSelector,
  workTimeSelector,
} from '../../../feature/selectors'
import { useSelector } from '../../../feature/store'
import Presenter from './Presenter'
import { useDispatch } from 'react-redux'
import useSoundConfig from 'src/lib/hooks/useSoundConfig'
import useTimer from 'src/lib/hooks/useTimer'
import { updateStatus } from 'src/feature/slices/timerStatus'

const index: React.FC = () => {
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

export default index
