import { storeData } from 'src/mock/storeData'
import { custumConfigsSelector } from '../custumConfig'

describe('custumConfigSelector', () => {
  test('custumConfigsSelector', () => {
    const custumConfigs = custumConfigsSelector(storeData)
    expect(custumConfigs).toEqual(storeData.custumConfig.custumConfig)
  })
})
