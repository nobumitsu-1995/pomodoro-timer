import React, { useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'
import WorkFinish from '../../../../public/sounds/WorkFinish.mp3'
import RestFinish from '../../../../public/sounds/RestFinish.mp3'
import {
  cycleSelector,
  restTimeSelector,
  volumeSelector,
  workTimeSelector,
} from '../../../feature/selectors'
import { useSelector } from '../../../feature/store'
import Presenter from './Presenter'

const index: React.FC = () => {
  const cycle = useSelector(cycleSelector)
  const workTime = useSelector(workTimeSelector)
  const restTime = useSelector(restTimeSelector)
  const volume = useSelector(volumeSelector)
  const [playWorkFinish] = useSound(WorkFinish, { volume: volume / 100 })
  const [playRestFinish] = useSound(RestFinish, { volume: volume / 100 })
  /** タイマーの残り回数 */
  const [leftCycle, setLeftCycle] = useState(cycle)
  /** 残り時間(秒) */
  const [leftTime, setLeftTime] = useState(workTime)
  /** タイマーに表示される分秒 */
  const [time, setTime] = useState({
    minutes: ('00' + Math.floor(leftTime / 60)).slice(-2),
    seconds: ('00' + (leftTime % 60)).slice(-2),
  })
  /** ポモドーロタイマーのstatus */
  const [timerStatus, setTimerStatus] = useState({
    isRunning: false,
    isPause: false,
    isRest: false,
  })

  /** workTime, restTimeの設定が変更された時の処理 */
  useEffect(() => {
    setLeftTime(workTime)
    setLeftCycle(cycle)
  }, [workTime, restTime, cycle])

  /** 1000msごとに実行される関数 */
  const tick = () => {
    setLeftTime((t: number) => {
      if (timerStatus.isRunning && !timerStatus.isPause) {
        //稼働中でポーズしていない
        return t - 1
      } else {
        //稼働していない、もしくはポーズ中
        return t
      }
    })
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
  }, [timerStatus, workTime])

  /** 残り時間を分秒に変換 */
  useEffect(() => {
    const minutes = ('00' + Math.floor(leftTime / 60)).slice(-2)
    const seconds = ('00' + (leftTime % 60)).slice(-2)
    setTime({ minutes: minutes, seconds: seconds })
  }, [leftTime])

  /** タイマーリセット処理 */
  const resetTimer = () => {
    //statusの初期化
    setTimerStatus({
      isRunning: false,
      isPause: false,
      isRest: false,
    })
    //タイマー残り回数の初期化
    setLeftCycle(cycle)
    //残り時間の初期化
    setLeftTime(workTime)
  }

  /** タイマー終了時の処理 */
  useEffect(() => {
    if (leftTime < 0 && !timerStatus.isRest) {
      //作業時間終了の処理
      playWorkFinish()
      setTimerStatus({
        isRunning: true,
        isPause: false,
        isRest: true,
      })
      setLeftTime(restTime)
    } else if (leftTime < 0 && timerStatus.isRest) {
      //休憩時間終了の処理
      playRestFinish()
      if (leftCycle === 1) {
        //タイマーが最後のサイクルの場合
        resetTimer()
      } else {
        //タイマーサイクルを減らす(-1)
        setLeftCycle((_cycle: number) => _cycle - 1)
        setTimerStatus({
          isRunning: true,
          isPause: false,
          isRest: false,
        })
        setLeftTime(workTime)
      }
    }
  }, [leftTime])

  const iconButtonItems = [
    {
      name: 'play_arrow',
      disable: timerStatus.isPause || !timerStatus.isRunning ? false : true,
      onClick: () => {
        setTimerStatus({
          ...timerStatus,
          isRunning: true,
          isPause: false,
        })
      },
    },
    {
      name: 'pause',
      disable: timerStatus.isPause || !timerStatus.isRunning ? true : false,
      onClick: () => {
        if (!timerStatus.isRunning) return
        setTimerStatus({
          ...timerStatus,
          isPause: true,
        })
      },
    },
    {
      name: 'stop',
      disable: !timerStatus.isRunning,
      onClick: () => {
        if (
          timerStatus.isRunning &&
          confirm('タイマーを中断してよろしいですか？')
        ) {
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
      }}
    />
  )
}

export default index
