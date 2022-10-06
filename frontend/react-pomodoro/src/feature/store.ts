import {
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { timerConfigReducer, TimerConfigType } from './timerConfig'
import { soundConfigReducer, SoundConfigType } from './soundConfig'
import { noticesReducer, NoticesType } from './notices'
import { timerStatusReducer, TimerStatusType } from './timerStatus'

export type StoreType = {
  timerConfig: TimerConfigType
  timerStatus: TimerStatusType
  soundConfig: SoundConfigType
  notices: NoticesType
}

export const store = configureStore({
  reducer: {
    timerConfig: timerConfigReducer,
    timerStatus: timerStatusReducer,
    soundConfig: soundConfigReducer,
    notices: noticesReducer,
  },
})

export const useSelector: TypedUseSelectorHook<StoreType> = reduxUseSelector
