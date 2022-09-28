import { createSelector } from 'reselect'
import { StoreType } from './store'

const timerConfigSelector = (state: StoreType) => state.timerConfig

export const cycleSelector = createSelector(
  timerConfigSelector,
  (timerConfig) => {
    return timerConfig.cycle
  }
)

export const workTimeSelector = createSelector(
  timerConfigSelector,
  (timerConfig) => {
    return timerConfig.workTime
  }
)

export const restTimeSelector = createSelector(
  timerConfigSelector,
  (timerConfig) => {
    return timerConfig.restTime
  }
)
