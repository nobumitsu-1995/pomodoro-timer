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
