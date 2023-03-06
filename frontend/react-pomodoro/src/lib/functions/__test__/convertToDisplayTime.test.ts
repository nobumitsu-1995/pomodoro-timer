import { convertToDisplayTime } from '../convertToDisplayTime'

describe('convertToDisplayTime', () => {
  test('0桁分：1桁秒', () => {
    const expected = convertToDisplayTime(9)
    expect(expected).toEqual({
      minutes: '00',
      seconds: '09',
    })
  })

  test('1桁分：1桁秒', () => {
    const expected = convertToDisplayTime(61)
    expect(expected).toEqual({
      minutes: '01',
      seconds: '01',
    })
  })

  test('2桁分：2桁秒', () => {
    const expected = convertToDisplayTime(610)
    expect(expected).toEqual({
      minutes: '10',
      seconds: '10',
    })
  })
})
