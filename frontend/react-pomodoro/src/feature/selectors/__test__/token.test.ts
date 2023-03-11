import { storeData } from 'src/mock/storeData'
import { tokenGetSelector } from '../token'

describe('tokenSelector', () => {
  test('tokenGetSelector', () => {
    const token = tokenGetSelector(storeData)
    expect(token).toEqual(storeData.token.token)
  })
})
