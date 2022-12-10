import React, { useEffect, useState } from 'react'
import {
  isLongRestCycleSelector,
  isRestSelector,
  isRunningSelector,
  leftTimeSelector,
  longRestTimeSelector,
  restTimeSelector,
  workTimeSelector,
} from 'src/feature/selectors'
import { useSelector } from 'src/feature/store'
import Presenter from './Presenter'

const index: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const leftTime = useSelector(leftTimeSelector)
  const workTime = useSelector(workTimeSelector)
  const restTime = useSelector(restTimeSelector)
  const isLongRestCycle = useSelector(isLongRestCycleSelector)
  const longRestTime = useSelector(longRestTimeSelector)
  const isRunning = useSelector(isRunningSelector)
  const isRest = useSelector(isRestSelector)

  useEffect(() => {
    const _progress = isRunning
      ? isRest
        ? // 休憩中の進捗
          isLongRestCycle
          ? // 長時間休憩時間の進捗
            (longRestTime - leftTime) / longRestTime
          : // 通常休憩時間の進捗
            (restTime - leftTime) / restTime
        : // タスク中の進捗
          (workTime - leftTime) / workTime
      : // 稼働していない時
        0
    setProgress(_progress)
  }, [leftTime])

  return <Presenter progress={progress} />
}

export default index
