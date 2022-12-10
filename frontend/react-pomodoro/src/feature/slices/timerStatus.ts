import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** timerStatusのfeatureの型 */
export type TimerStatusType = {
  /** タイマーは稼働中 */
  isRunning: boolean
  /** タイマーは一時停止中 */
  isPause: boolean
  /** タイマーは稼働中で休憩時間 */
  isRest: boolean
  /** タイマーは長い休憩時間のサイクルである */
  isLongRestCycle: boolean
  /** タイマーの残り時間 */
  leftTime: number
}

/** timerStatusのfeatureの初期値 */
const initialState: TimerStatusType = {
  isRunning: false,
  isPause: false,
  isRest: false,
  isLongRestCycle: false,
  leftTime: 60 * 25,
}

/** timerStatusのfeatureのSlice */
export const timerStatusSlice = createSlice({
  name: 'timerStatus',
  initialState,
  reducers: {
    updateIsRunning: (state) => {
      state.isRunning = !state.isRunning
    },
    updateIsPause: (state) => {
      state.isPause = !state.isPause
    },
    updateIsRest: (state) => {
      state.isRest = !state.isRest
    },
    initTimerStatus: (state) => {
      state.isRunning = false
      state.isPause = false
      state.isRest = false
    },
    workFinish: (state) => {
      state.isRunning = true
      state.isPause = false
      state.isRest = true
    },
    restFinish: (state) => {
      state.isRunning = true
      state.isPause = false
      state.isRest = false
    },
    updatePlay: (state) => {
      state.isRunning = true
      state.isPause = false
    },
    updatePause: (state) => {
      state.isPause = true
    },
    updateIsLongRestCycle: (state, action: PayloadAction<boolean>) => {
      state.isLongRestCycle = action.payload
    },
    setLeftTime: (state, action: PayloadAction<number>) => {
      state.leftTime = action.payload
    },
    passLeftTime: (state) => {
      state.leftTime -= 1
    },
  },
})

const { actions, reducer } = timerStatusSlice
export const {
  updateIsRunning,
  updateIsPause,
  updateIsRest,
  initTimerStatus,
  workFinish,
  restFinish,
  updatePlay,
  updatePause,
  updateIsLongRestCycle,
  setLeftTime,
  passLeftTime,
} = actions
export const timerStatusReducer = reducer
