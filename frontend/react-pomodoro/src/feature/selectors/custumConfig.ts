import { createSelector } from 'reselect'
import { StoreType } from '../store'

const custumConfigSelector = (state: StoreType) => state.custumConfig

export const custumConfigsSelector = createSelector(
  custumConfigSelector,
  (custumConfigs) => {
    return custumConfigs.custumConfig
  }
)
