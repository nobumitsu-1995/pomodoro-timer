import { createSelector } from 'reselect'
import { StoreType } from '../store'

const taskSelector = (state: StoreType) => state.tasks

export const tasksSelector = createSelector(taskSelector, (tasks) => {
  return tasks.tasks
})

export const currentTaskSelector = createSelector(taskSelector, (tasks) => {
  return tasks.currentTask
})
