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

const soundConfigSelector = (state: StoreType) => state.soundConfig

export const volumeSelector = createSelector(
  soundConfigSelector,
  (soundConfig) => {
    return soundConfig.volume
  }
)

export const casheVolumeSelector = createSelector(
  soundConfigSelector,
  (soundConfig) => {
    return soundConfig.casheVolume
  }
)

const noticeSelector = (state: StoreType) => state.notices

export const noticesSelector = createSelector(noticeSelector, (notices) => {
  return notices.notices
})

const tokenSelector = (state: StoreType) => state.token

export const tokenGetSelector = createSelector(tokenSelector, (token) => {
  return token.token
})

const custumConfigSelector = (state: StoreType) => state.custumConfig

export const custumConfigsSelector = createSelector(
  custumConfigSelector,
  (custumConfigs) => {
    return custumConfigs.custumConfig
  }
)

const taskSelector = (state: StoreType) => state.tasks

export const tasksSelector = createSelector(taskSelector, (tasks) => {
  return tasks.tasks
})

export const currentTaskSelector = createSelector(taskSelector, (tasks) => {
  return tasks.currentTask
})
