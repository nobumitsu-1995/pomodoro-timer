import {
  useSelector as reduxUseSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { timerConfigReducer, TimerConfigType } from './slices/timerConfig'
import { soundConfigReducer, SoundConfigType } from './slices/soundConfig'
import { noticesReducer, NoticesType } from './slices/notices'
import { timerStatusReducer, TimerStatusType } from './slices/timerStatus'
import { tokenReducer, TokenType } from './slices/token'
import { custumConfigReducer, CustumConfigsType } from './slices/custumConfig'
import { tasksReducer, TasksType } from './slices/tasks'
import { achievementsReducer, AchievementsType } from './slices/achievements'

export type StoreType = {
  timerConfig: TimerConfigType
  timerStatus: TimerStatusType
  soundConfig: SoundConfigType
  notices: NoticesType
  custumConfig: CustumConfigsType
  tasks: TasksType
  achievements: AchievementsType
  token: TokenType
}

export const store = configureStore({
  reducer: {
    timerConfig: timerConfigReducer,
    timerStatus: timerStatusReducer,
    soundConfig: soundConfigReducer,
    notices: noticesReducer,
    custumConfig: custumConfigReducer,
    tasks: tasksReducer,
    achievements: achievementsReducer,
    token: tokenReducer,
  },
})

export const useSelector: TypedUseSelectorHook<StoreType> = reduxUseSelector
