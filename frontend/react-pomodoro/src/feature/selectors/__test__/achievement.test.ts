import { storeData } from 'src/mock/storeData'
import { achievementsSelector } from '../achievement'

describe('custumConfigSelector', () => {
  test('achievementsSelector', () => {
    const achievements = achievementsSelector(storeData)
    expect(achievements).toEqual(storeData.achievements.achievements)
  })
})
