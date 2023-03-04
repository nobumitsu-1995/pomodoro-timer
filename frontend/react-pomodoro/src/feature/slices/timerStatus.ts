import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TimerStatus = 'stop' | 'running' | 'pause' | 'rest' | 'longRest'

/** timerStatusのfeatureの型 */
export type TimerStatusType = {
  /** 残り時間 */
  leftTime: number
  /** タイマー開始時間 */
  startTime: Date | null
  /** タイマーの状況 */
  status: TimerStatus
}

/** timerStatusのfeatureの初期値 */
const initialState: TimerStatusType = {
  status: 'stop',
  startTime: null,
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
    passLeftTime: (state) => {
      state.leftTime -= 1
    },
  },
})

const { actions, reducer } = timerStatusSlice
export const { updateStatus, setLeftTime, passLeftTime } = actions
export const timerStatusReducer = reducer
