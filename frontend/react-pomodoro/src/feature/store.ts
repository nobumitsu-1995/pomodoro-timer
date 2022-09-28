import {
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { timerConfigReducer, TimerConfigType } from './timerConfig'

export type StoreType = {
  timerConfig: TimerConfigType
}

export const store = configureStore({
  reducer: { timerConfig: timerConfigReducer },
})

export const useSelector: TypedUseSelectorHook<StoreType> = reduxUseSelector
