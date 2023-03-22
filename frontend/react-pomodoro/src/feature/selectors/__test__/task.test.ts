import { storeData } from 'src/mock/storeData'
import { currentTaskSelector, tasksSelector } from '../task'

describe('taskSelector', () => {
  test('tasksSelector', () => {
    const tasks = tasksSelector(storeData)
    expect(tasks).toEqual(storeData.tasks.tasks)
  })

  test('currentTaskSelector', () => {
    const currentTask = currentTaskSelector(storeData)
    expect(currentTask).toEqual(storeData.tasks.currentTask)
  })
})
