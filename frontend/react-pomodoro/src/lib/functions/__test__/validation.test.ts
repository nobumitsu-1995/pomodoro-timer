import { validateCycle, validateTimerConfig } from '../validation'

describe('validation', () => {
  describe('validateCycle', () => {
    test('0の時', () => {
      const result = validateCycle(0)
      expect(result).toBe('1-10 are allowed.')
    })

    test('1の時', () => {
      const result = validateCycle(1)
      expect(result).toBe('')
    })

    test('10の時', () => {
      const result = validateCycle(10)
      expect(result).toBe('')
    })

    test('11の時', () => {
      const result = validateCycle(11)
      expect(result).toBe('1-10 are allowed.')
    })
  })

  describe('validateTimerConfig', () => {
    test('4の時', () => {
      const result = validateTimerConfig(4)
      expect(result).toBe('5-60 are allowed.')
    })

    test('5の時', () => {
      const result = validateTimerConfig(5)
      expect(result).toBe('')
    })

    test('60の時', () => {
      const result = validateTimerConfig(60)
      expect(result).toBe('')
    })

    test('61の時', () => {
      const result = validateTimerConfig(61)
      expect(result).toBe('5-60 are allowed.')
    })
  })
})
