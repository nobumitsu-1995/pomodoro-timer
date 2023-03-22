import { storeData } from 'src/mock/storeData'
import { noticesSelector } from '../notice'

describe('noticeSelector', () => {
  test('noticesSelector', () => {
    const notices = noticesSelector(storeData)
    expect(notices).toEqual(storeData.notices.notices)
  })
})
