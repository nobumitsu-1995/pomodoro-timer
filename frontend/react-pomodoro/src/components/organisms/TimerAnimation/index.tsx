import React, { useEffect, useState } from 'react'
import {
  isRestSelector,
  isRunningSelector,
  leftTimeSelector,
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
  const isRunning = useSelector(isRunningSelector)
  const isRest = useSelector(isRestSelector)

  useEffect(() => {
    const _progress = isRunning
      ? isRest
        ? // 休憩中の進捗
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
