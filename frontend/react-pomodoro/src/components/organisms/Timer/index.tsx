import React, { useEffect, useRef, useState } from 'react'
import Presenter from './Presenter'

const index: React.FC = () => {
  /** タイマーの設定 */
  const [timerConfig, setTimerConfig] = useState({
    /** タイマーを繰り返す回数 */
    cycle: 3,
    /** 作業時間(秒) */
    workingTime: 60 * 25,
    /** 休憩時間(秒) */
    restTime: 60 * 5,
  })
  /** タイマーの残り回数 */
  const [leftCycle, setLeftCycle] = useState(timerConfig.cycle)
  /** 残り時間(秒) */
  const [leftTime, setLeftTime] = useState(timerConfig.workingTime)
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

  /** 1000msごとに実行される関数 */
  const tick = () => {
    setLeftTime((t) => {
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
  }, [timerStatus, timerConfig.workingTime])

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
    setLeftCycle(timerConfig.cycle)
    //残り時間の初期化
    setLeftTime(timerConfig.workingTime)
  }

  /** タイマー終了時の処理 */
  useEffect(() => {
    if (leftTime < 0 && !timerStatus.isRest) {
      //作業時間終了の処理
      setTimerStatus({
        isRunning: true,
        isPause: false,
        isRest: true,
      })
      setLeftTime(timerConfig.restTime)
    } else if (leftTime < 0 && timerStatus.isRest) {
      //休憩時間終了の処理
      if (leftCycle === 1) {
        //タイマーが最後のサイクルの場合
        resetTimer()
      } else {
        //タイマーサイクルを減らす(-1)
        setLeftCycle((cycle) => cycle - 1)
        setTimerStatus({
          isRunning: true,
          isPause: false,
          isRest: false,
        })
        setLeftTime(timerConfig.workingTime)
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
        cycle: timerConfig.cycle,
        leftCycle: leftCycle,
      }}
    />
  )
}

export default index
