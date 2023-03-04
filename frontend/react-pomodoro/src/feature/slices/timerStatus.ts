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
    setEndTime: (state) => {
      state.endTime = new Date().getTime() + state.leftTime * 1000
    },
  },
})

const { actions, reducer } = timerStatusSlice
export const { updateStatus, setLeftTime, setEndTime } = actions
export const timerStatusReducer = reducer
