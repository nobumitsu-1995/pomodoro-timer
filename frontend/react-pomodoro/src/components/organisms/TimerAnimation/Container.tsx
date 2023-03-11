import React, { useEffect, useState } from 'react'
import {
  longRestTimeSelector,
  restTimeSelector,
  workTimeSelector,
} from 'src/feature/selectors/timerConfig'
import {
  leftTimeSelector,
  statusSelector,
} from 'src/feature/selectors/timerStatus'

import { useSelector } from 'src/feature/store'
import Presenter from './Presenter'

const Container: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const leftTime = useSelector(leftTimeSelector)
  const workTime = useSelector(workTimeSelector)
  const restTime = useSelector(restTimeSelector)
  const longRestTime = useSelector(longRestTimeSelector)
  const status = useSelector(statusSelector)

  useEffect(() => {
    let _progress: number
    switch (status) {
      case 'running':
        _progress = (workTime - leftTime) / workTime
        break
      case 'rest':
        _progress = (restTime - leftTime) / restTime
        break
      case 'longRest':
        _progress = (longRestTime - leftTime) / longRestTime
        break
      case 'pause':
        _progress = progress
        break
      default:
        _progress = 0
        break
    }
    setProgress(_progress)
  }, [leftTime])

  return <Presenter progress={progress} />
}

export default Container
