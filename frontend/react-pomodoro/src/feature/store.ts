import {
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { timerConfigReducer, TimerConfigType } from './timerConfig'
import { soundConfigReducer, SoundConfigType } from './soundConfig'

export type StoreType = {
  timerConfig: TimerConfigType
  soundConfig: SoundConfigType
}

export const store = configureStore({
  reducer: { timerConfig: timerConfigReducer, soundConfig: soundConfigReducer },
})

export const useSelector: TypedUseSelectorHook<StoreType> = reduxUseSelector
