import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** timerConfigのfeatureの型 */
export type TimerConfigType = {
  /** タイマーを繰り返す回数 */
  cycle: number
  /** 作業時間(秒) */
  workingTime: number
  /** 休憩時間(秒) */
  restTime: number
}

/** timerConfigのfeatureの初期値 */
const initialState: TimerConfigType = {
  cycle: 3,
  workingTime: 60 * 25,
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
    updateWorkingTime: (state, action: PayloadAction<number>) => {
      state.workingTime = action.payload
    },
    updateRestTime: (state, action: PayloadAction<number>) => {
      state.restTime = action.payload
    },
  },
})

const { actions, reducer } = timerConfigSlice
export const { updateCycle, updateWorkingTime, updateRestTime } = actions
export const timerConfigReducer = reducer
