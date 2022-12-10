import React, { useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'
import WorkFinish from '../../../assets/sounds/WorkFinish.mp3'
import RestFinish from '../../../assets/sounds/RestFinish.mp3'
import {
  cycleSelector,
  cycleToLongRestTimeSelector,
  isLongRestCycleSelector,
  isPauseSelector,
  isRestSelector,
  isRunningSelector,
  leftTimeSelector,
  longRestTimeSelector,
  restTimeSelector,
  volumeSelector,
  workTimeSelector,
} from '../../../feature/selectors'
import { useSelector } from '../../../feature/store'
import Presenter from './Presenter'
import { useDispatch } from 'react-redux'
import {
  initTimerStatus,
  passLeftTime,
  restFinish,
  setLeftTime,
  updateIsLongRestCycle,
  updatePause,
  updatePlay,
  workFinish,
} from 'src/feature/slices/timerStatus'

const index: React.FC = () => {
  const dispatch = useDispatch()
  const cycle = useSelector(cycleSelector)
  const workTime = useSelector(workTimeSelector)
  const restTime = useSelector(restTimeSelector)
  const volume = useSelector(volumeSelector)
  const isRunning = useSelector(isRunningSelector)
  const isPause = useSelector(isPauseSelector)
  const isRest = useSelector(isRestSelector)
  const leftTime = useSelector(leftTimeSelector)
  const longRestTime = useSelector(longRestTimeSelector)
  const cycleToLongRestTime = useSelector(cycleToLongRestTimeSelector)
  const isLongRestCycle = useSelector(isLongRestCycleSelector)
  const [playWorkFinish] = useSound(WorkFinish, { volume: volume / 100 })
  const [playRestFinish] = useSound(RestFinish, { volume: volume / 100 })
  /** タイマーの残り回数 */
  const [leftCycle, setLeftCycle] = useState(cycle)
  /** タイマーに表示される分秒 */
  const [time, setTime] = useState({
    minutes: ('00' + Math.floor(leftTime / 60)).slice(-2),
    seconds: ('00' + (leftTime % 60)).slice(-2),
  })

  /** workTime, restTimeの設定が変更された時の処理 */
  useEffect(() => {
    dispatch(setLeftTime(workTime))
    setLeftCycle(cycle)
  }, [workTime, restTime, cycle])

  /** 1000msごとに実行される関数 */
  const tick = () => {
    if (isRunning && !isPause) {
      dispatch(passLeftTime())
    }
  }

  /** タイマーのID。スタート、ストップ、ポーズの操作に応じて切り替わる */
  const timerId = useRef<NodeJS.Timeout>()
  /** tick関数、タイマーのIDのリセットなどを実行 */
  useEffect(() => {
    const clearTimer = () => {
      if (timerId.current) clearInterval(timerId.current)
    }
    clearTimer()
    timerId.current = setInterval(tick, 1000)
    return () => {
      clearTimer
    }
  }, [isRunning, isPause, isRest, workTime])

  /** 残り時間を分秒に変換 */
  useEffect(() => {
    const minutes = ('00' + Math.floor(leftTime / 60)).slice(-2)
    const seconds = ('00' + (leftTime % 60)).slice(-2)
    setTime({ minutes: minutes, seconds: seconds })
  }, [leftTime, isRunning])

  useEffect(() => {
    if ((cycle - leftCycle + 1) % cycleToLongRestTime === 0) {
      dispatch(updateIsLongRestCycle(true))
    } else {
      dispatch(updateIsLongRestCycle(false))
    }
  }, [leftCycle])

  /** タイマーリセット処理 */
  const resetTimer = () => {
    //statusの初期化
    dispatch(initTimerStatus())
    //タイマー残り回数の初期化
    setLeftCycle(cycle)
    //残り時間の初期化
    dispatch(dispatch(setLeftTime(workTime)))
  }

  /** タイマー終了時の処理 */
  useEffect(() => {
    if (leftTime < 0 && !isRest) {
      //作業時間終了の処理
      playWorkFinish()
      dispatch(workFinish())
      dispatch(setLeftTime(restTime))
      if (isLongRestCycle) {
        dispatch(setLeftTime(longRestTime))
      }
    } else if (leftTime < 0 && isRest) {
      //休憩時間終了の処理
      playRestFinish()
      if (leftCycle === 1) {
        //タイマーが最後のサイクルの場合
        resetTimer()
      } else {
        //タイマーサイクルを減らす(-1)
        setLeftCycle((_cycle: number) => _cycle - 1)
        dispatch(restFinish())
        dispatch(setLeftTime(workTime))
      }
    }
  }, [leftTime])

  const iconButtonItems = [
    {
      name: 'play_arrow',
      disable: isPause || !isRunning ? false : true,
      onClick: () => {
        dispatch(updatePlay())
      },
    },
    {
      name: 'pause',
      disable: isPause || !isRunning ? true : false,
      onClick: () => {
        if (!isRunning) return
        dispatch(updatePause())
      },
    },
    {
      name: 'stop',
      disable: !isRunning,
      onClick: () => {
        if (isRunning && confirm('タイマーを中断してよろしいですか？')) {
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
