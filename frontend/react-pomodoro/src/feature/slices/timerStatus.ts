import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TimerStatus = 'stop' | 'running' | 'pause' | 'rest' | 'longRest'

/** timerStatusのfeatureの型 */
export type TimerStatusType = {
  /** 残り時間 */
  leftTime: number
  /** タイマーの終了時間 */
  endTime: number
  /** タイマーの状況 */
  status: TimerStatus
}

/** timerStatusのfeatureの初期値 */
const initialState: TimerStatusType = {
  status: 'stop',
  endTime: new Date().getTime(),
  leftTime: 60 * 25,
}

/** timerStatusのfeatureのSlice */
export const timerStatusSlice = createSlice({
  name: 'timerStatus',
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<TimerStatus>) => {
      state.status = action.payload
    },
    setLeftTime: (state, action: PayloadAction<number>) => {
      state.leftTime = action.payload
    },
    setEndTime: (state, action: PayloadAction<number>) => {
      state.endTime = new Date().getTime() + action.payload * 1000
    },
    statusRunning: (state, action: PayloadAction<number>) => {
      state.status = 'running'
      state.endTime = new Date().getTime() + action.payload * 1000
      state.leftTime = action.payload
    },
    statusRest: (state, action: PayloadAction<number>) => {
      state.endTime = new Date().getTime() + action.payload * 1000
      state.status = 'rest'
      state.leftTime = action.payload
    },
    statusLongRest: (state, action: PayloadAction<number>) => {
      state.endTime = new Date().getTime() + action.payload * 1000
      state.status = 'longRest'
      state.leftTime = action.payload
    },
  },
})

const { actions, reducer } = timerStatusSlice
export const {
  updateStatus,
  setLeftTime,
  setEndTime,
  statusRunning,
  statusRest,
  statusLongRest,
} = actions
export const timerStatusReducer = reducer
