import {
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { timerConfigReducer, TimerConfigType } from './timerConfig'
import { soundConfigReducer, SoundConfigType } from './soundConfig'
import { noticesReducer, NoticesType } from './notices'

export type StoreType = {
  timerConfig: TimerConfigType
  soundConfig: SoundConfigType
  notices: NoticesType
}

export const store = configureStore({
  reducer: {
    timerConfig: timerConfigReducer,
    soundConfig: soundConfigReducer,
    notices: noticesReducer,
  },
})

export const useSelector: TypedUseSelectorHook<StoreType> = reduxUseSelector
