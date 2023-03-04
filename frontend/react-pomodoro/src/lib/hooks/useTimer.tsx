import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  passLeftTime,
  setLeftTime,
  TimerStatus,
  updateStatus,
} from 'src/feature/slices/timerStatus'
import { PlayFunction } from 'use-sound/dist/types'
import { createAchievement } from '../functions/createAchievement'

type Props = {
  playRestFinish: PlayFunction
  playWorkFinish: PlayFunction
  /** Timerを何サイクル回すか */
  cycle: number
  /** 仕事時間の設定時間 */
  workTime: number
  /** 休憩時間の設定時間 */
  restTime: number
  /** 長い休憩時間 */
  longRestTime: number
  /** 長い休憩時間までのサイクル */
  cycleToLongRestTime: number
  /** 残り時間 */
  leftTime: number
  /** タイマーの状況 */
  status: TimerStatus
  /** 現在設定されているタスクのID */
  taskId: string | null
  token: string | null
}

/** Timerの動作に関するHooks */
const useTimer = ({
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
}: Props) => {
  const dispatch = useDispatch()

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
    if (status === 'running' || status === 'rest' || status === 'longRest') {
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
  }, [status, workTime])

  /** 残り時間を分秒に変換 */
  useEffect(() => {
    const minutes = ('00' + Math.floor(leftTime / 60)).slice(-2)
    const seconds = ('00' + (leftTime % 60)).slice(-2)
    setTime({ minutes: minutes, seconds: seconds })
  }, [leftTime, status])

  /** 長い休憩時間の判定 */
  const isLongRest = () => {
    if ((cycle - leftCycle + 1) % cycleToLongRestTime === 0) return true
    return false
  }

  /** タイマーリセット処理 */
  const resetTimer = () => {
    //statusの初期化
    dispatch(updateStatus('stop'))
    //タイマー残り回数の初期化
    setLeftCycle(cycle)
    //残り時間の初期化
    dispatch(dispatch(setLeftTime(workTime)))
  }

  /** タイマー終了時の処理 */
  useEffect(() => {
    if (leftTime > 0) return

    switch (status) {
      //作業時間終了の処理
      case 'running':
        playWorkFinish()
        taskId && token && createAchievement(token, taskId, workTime * cycle)
        dispatch(updateStatus('rest'))
        isLongRest()
          ? // 長い休憩時間の場合
            dispatch(setLeftTime(longRestTime))
          : // 通常の休憩時間の場合
            dispatch(setLeftTime(restTime))
        break

      //休憩時間終了の処理
      case 'rest':
        playRestFinish()
        leftCycle === 1
          ? //タイマーが最後のサイクルの場合
            resetTimer()
          : //タイマーサイクルを減らす(-1)
            (setLeftCycle((_cycle: number) => _cycle - 1),
            dispatch(updateStatus('running')),
            dispatch(setLeftTime(workTime)))
        break
      default:
        break
    }
  }, [leftTime])

  return { leftCycle, time, resetTimer }
}

export default useTimer
