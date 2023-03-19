import { createSelector } from 'reselect'
import { StoreType } from '../store'

const achievementSelector = (state: StoreType) => state.achievements

export const achievementsSelector = createSelector(
  achievementSelector,
  (achivements) => {
    return achivements.achievements
  }
)
