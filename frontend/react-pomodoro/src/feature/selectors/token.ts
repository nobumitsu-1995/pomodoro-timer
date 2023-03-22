import { createSelector } from 'reselect'
import { StoreType } from '../store'

const tokenSelector = (state: StoreType) => state.token

export const tokenGetSelector = createSelector(tokenSelector, (token) => {
  return token.token
})
