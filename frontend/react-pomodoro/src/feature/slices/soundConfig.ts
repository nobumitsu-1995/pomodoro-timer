import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** soundConfiのfeatureの型 */
export type SoundConfigType = {
  volume: number
  casheVolume: number
}

/** soundConfigのfeatureの初期値 */
export const initialState: SoundConfigType = {
  volume: 50,
  casheVolume: 50,
}

/** soundConfigのfeatureのSlice */
export const soundConfigSlice = createSlice({
  name: 'soundConfig',
  initialState,
  reducers: {
    updateVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
      state.casheVolume = action.payload
    },
    muteVolume: (state) => {
      state.volume = 0
    },
    unMuteVolume: (state) => {
      state.volume = state.casheVolume
    },
  },
})

const { actions, reducer } = soundConfigSlice
export const { updateVolume, muteVolume, unMuteVolume } = actions
export const soundConfigReducer = reducer
