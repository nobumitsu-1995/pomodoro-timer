import React, { useEffect, useRef, useState } from 'react'
import Presenter from './Presenter'

const index: React.FC = () => {
  /** 作業時間(秒) */
  const workingTime = 60 * 25
  /** 休憩時間(秒) */
  const restTime = 60 * 5
  /** タイマーのID。スタート、ストップ、ポーズの操作に応じて切り替わる */
  const timerId = useRef<NodeJS.Timeout>()
  /** タイマーに表示される分秒 */
  const [time, setTime] = useState({ minutes: '25', seconds: '00' })
  /** 残り時間(秒) */
  const [leftTime, setLeftTime] = useState(workingTime)
  /** ポモドーロタイマーのstatus */
  const [timerStatus, setTimerStatus] = useState({
    isRunning: false,
    isPause: false,
    isRest: false,
  })

  /** 1000msごとに実行される関数 */
  const tick = () =>
    setLeftTime((t) => {
      if (timerStatus.isRunning && !timerStatus.isPause) {
        //稼働中でポーズしていない
        return t - 1
      } else {
        //稼働していない、もしくはポーズ中
        return t
      }
    })

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
  }, [timerStatus, workingTime])

  /** 残り時間を分秒に変換 */
  useEffect(() => {
    const minutes = ('00' + Math.floor(leftTime / 60)).slice(-2)
    const seconds = ('00' + (leftTime % 60)).slice(-2)
    setTime({ minutes: minutes, seconds: seconds })
  }, [leftTime])

  /** タイマーリセット処理 */
  const resetTimer = () => {
    setTimerStatus({
      ...timerStatus,
      isRunning: false,
      isPause: false,
    })
    setLeftTime(workingTime)
  }

  /** タイマー終了時の処理 */
  useEffect(() => {
    if (leftTime < 0 && !timerStatus.isRest) {
      //作業時間終了の処理
      setTimerStatus({
        ...timerStatus,
        isRest: true,
      })
      setLeftTime(restTime)
    } else if (leftTime < 0 && timerStatus.isRest) {
      //休憩時間終了の処理
      resetTimer()
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

  return <Presenter time={time} iconButtonItems={iconButtonItems} />
}

export default index
