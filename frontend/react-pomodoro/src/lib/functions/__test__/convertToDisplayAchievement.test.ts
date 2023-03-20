import { convertToDisplayAchievement } from '../convertToDisplayAchievement'

describe('convertToDisplayAchievement', () => {
  test('正常に値が返る 6000秒', () => {
    const expected = convertToDisplayAchievement(6000)
    expect(expected).toBe('1:40:00')
  })

  test('正常に値が返る 6060秒', () => {
    const expected = convertToDisplayAchievement(6060)
    expect(expected).toBe('1:41:00')
  })

  test('正常に値が返る 6061秒', () => {
    const expected = convertToDisplayAchievement(6061)
    expect(expected).toBe('1:41:01')
  })

  test('正常に値が返る 6071秒', () => {
    const expected = convertToDisplayAchievement(6071)
    expect(expected).toBe('1:41:11')
  })
})
