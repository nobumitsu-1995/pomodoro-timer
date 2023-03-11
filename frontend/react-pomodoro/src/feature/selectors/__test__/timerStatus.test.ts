import { storeData } from 'src/mock/storeData'
import {
  endTimeSelector,
  leftTimeSelector,
  statusSelector,
} from '../timerStatus'

describe('timerStatusSelector', () => {
  test('statusSelector', () => {
    const status = statusSelector(storeData)
    expect(status).toEqual(storeData.timerStatus.status)
  })

  test('leftTimeSelector', () => {
    const leftTime = leftTimeSelector(storeData)
    expect(leftTime).toEqual(storeData.timerStatus.leftTime)
  })

  test('endTimeSelector', () => {
    const endTime = endTimeSelector(storeData)
    expect(endTime).toEqual(storeData.timerStatus.endTime)
  })
})
