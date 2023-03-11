import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustumConfigType } from 'src/lib/types/modelType'

/** timerConfigのfeatureの型 */
export type TimerConfigType = {
  /** タイマーを繰り返す回数 */
  cycle: number
  /** 作業時間(秒) */
  workTime: number
  /** 休憩時間(秒) */
  restTime: number
  /** 長い休憩時間(秒) */
  longRestTime: number
  /** 長い休憩時間までのサイクル数 */
  cycleToLongRestTime: number
}

/** timerConfigのfeatureの初期値 */
export const initialState: TimerConfigType = {
  cycle: 3,
  workTime: 60 * 25,
  restTime: 60 * 5,
  longRestTime: 0,
  cycleToLongRestTime: 0,
}

/** timerConfigのfeatureのSlice */
export const timerConfigSlice = createSlice({
  name: 'timerConfig',
  initialState,
  reducers: {
    updateCycle: (state, action: PayloadAction<number>) => {
      state.cycle = action.payload
    },
    incrementWorkTime: (state) => {
      state.workTime += 60 * 5
      if (state.workTime > 60 * 60) state.workTime = 60 * 60
    },
    decrementWorkTime: (state) => {
      state.workTime -= 60 * 5
      if (state.workTime < 60 * 5) state.workTime = 60 * 5
    },
    incrementRestTime: (state) => {
      state.restTime += 60 * 5
      if (state.restTime > 60 * 60) state.restTime = 60 * 60
    },
    decrementRestTime: (state) => {
      state.restTime -= 60 * 5
      if (state.restTime < 60 * 5) state.restTime = 60 * 5
    },
    setCustumTimerConfig: (state, action: PayloadAction<CustumConfigType>) => {
      state.cycle = action.payload.cycle
      state.restTime = action.payload.restTime * 60
      state.workTime = action.payload.workTime * 60
      state.longRestTime = action.payload.longRestTime * 60
      state.cycleToLongRestTime = action.payload.cycleToLongRestTime
    },
  },
})

const { actions, reducer } = timerConfigSlice
export const {
  updateCycle,
  incrementWorkTime,
  decrementWorkTime,
  incrementRestTime,
  decrementRestTime,
  setCustumTimerConfig,
} = actions
export const timerConfigReducer = reducer
