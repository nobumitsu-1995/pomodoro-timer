import { createSelector } from 'reselect'
import { StoreType } from '../store'

const timerStatusSelector = (state: StoreType) => state.timerStatus

export const statusSelector = createSelector(
  timerStatusSelector,
  (timerStatus) => {
    return timerStatus.status
  }
)

export const leftTimeSelector = createSelector(
  timerStatusSelector,
  (timerStatus) => {
    return timerStatus.leftTime
  }
)

export const endTimeSelector = createSelector(
  timerStatusSelector,
  (timerStatus) => {
    return timerStatus.endTime
  }
)
