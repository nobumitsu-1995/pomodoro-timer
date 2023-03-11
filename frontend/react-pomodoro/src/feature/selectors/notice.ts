import { createSelector } from 'reselect'
import { StoreType } from '../store'

const noticeSelector = (state: StoreType) => state.notices

export const noticesSelector = createSelector(noticeSelector, (notices) => {
  return notices.notices
})
