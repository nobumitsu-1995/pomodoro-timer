import { createSelector } from 'reselect'
import { StoreType } from '../store'

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

export const longRestTimeSelector = createSelector(
  timerConfigSelector,
  (timerConfig) => {
    return timerConfig.longRestTime
  }
)

export const cycleToLongRestTimeSelector = createSelector(
  timerConfigSelector,
  (timerConfig) => {
    return timerConfig.cycleToLongRestTime
  }
)
