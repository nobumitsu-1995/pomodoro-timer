import { createSelector } from 'reselect'
import { StoreType } from '../store'

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
