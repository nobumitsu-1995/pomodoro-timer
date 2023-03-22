import { storeData } from 'src/mock/storeData'
import {
  cycleSelector,
  cycleToLongRestTimeSelector,
  longRestTimeSelector,
  restTimeSelector,
  workTimeSelector,
} from '../timerConfig'

describe('timerConfigSelector', () => {
  test('cycleSelector', () => {
    const cycle = cycleSelector(storeData)
    expect(cycle).toEqual(storeData.timerConfig.cycle)
  })

  test('workTimeSelector', () => {
    const workTime = workTimeSelector(storeData)
    expect(workTime).toEqual(storeData.timerConfig.workTime)
  })

  test('restTimeSelector', () => {
    const restTime = restTimeSelector(storeData)
    expect(restTime).toEqual(storeData.timerConfig.restTime)
  })

  test('longRestTimeSelector', () => {
    const longRestTime = longRestTimeSelector(storeData)
    expect(longRestTime).toEqual(storeData.timerConfig.longRestTime)
  })

  test('cycleToLongRestTimeSelector', () => {
    const cycleToLongRestTime = cycleToLongRestTimeSelector(storeData)
    expect(cycleToLongRestTime).toEqual(
      storeData.timerConfig.cycleToLongRestTime
    )
  })
})
