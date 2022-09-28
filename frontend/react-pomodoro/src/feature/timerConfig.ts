import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** timerConfigのfeatureの型 */
export type TimerConfigType = {
  /** タイマーを繰り返す回数 */
  cycle: number
  /** 作業時間(秒) */
  workTime: number
  /** 休憩時間(秒) */
  restTime: number
}

/** timerConfigのfeatureの初期値 */
const initialState: TimerConfigType = {
  cycle: 3,
  workTime: 60 * 25,
  restTime: 60 * 5,
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
    },
    decrementWorkTime: (state) => {
      state.workTime -= 60 * 5
    },
    incrementRestTime: (state) => {
      state.restTime += 60 * 5
    },
    decrementRestTime: (state) => {
      state.restTime -= 60 * 5
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
} = actions
export const timerConfigReducer = reducer
