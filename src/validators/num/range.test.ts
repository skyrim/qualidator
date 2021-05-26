import { range, between } from './range'

describe('range', () => {
  describe('number', () => {
    test('minimum value', () => {
      expect(range(10)(1)).toBe(false)
      expect(range(10)(10)).toBe(true)
      expect(range(10)(100)).toBe(true)
    })

    test('maximum value', () => {
      expect(range(0, 10)(1)).toBe(true)
      expect(range(0, 10)(10)).toBe(true)
      expect(range(0, 10)(100)).toBe(false)
    })

    test('range', () => {
      expect(range(0, 10)(-1)).toBe(false)
      expect(range(0, 10)(0)).toBe(true)
      expect(range(0, 10)(5)).toBe(true)
      expect(range(0, 10)(10)).toBe(true)
      expect(range(0, 10)(100)).toBe(false)
    })

    test('between should be the same as range', () => {
      expect(between(0, 10)(-1)).toBe(false)
      expect(between(0, 10)(0)).toBe(true)
      expect(between(0, 10)(5)).toBe(true)
      expect(between(0, 10)(10)).toBe(true)
      expect(between(0, 10)(100)).toBe(false)
    })
  })

  describe('string', () => {
    test('minimum value', () => {
      expect(range(10)('1')).toBe(false)
      expect(range(10)("10")).toBe(true)
      expect(range(10)("100")).toBe(true)
    })

    test('maximum value', () => {
      expect(range(0, 10)("1")).toBe(true)
      expect(range(0, 10)("10")).toBe(true)
      expect(range(0, 10)("100")).toBe(false)
    })

    test('range', () => {
      expect(range(0, 10)('-1')).toBe(false)
      expect(range(0, 10)('0')).toBe(true)
      expect(range(0, 10)('5')).toBe(true)
      expect(range(0, 10)('10')).toBe(true)
      expect(range(0, 10)('100')).toBe(false)
    })

    test('between should be the same as range', () => {
      expect(between(0, 10)('-1')).toBe(false)
      expect(between(0, 10)('0')).toBe(true)
      expect(between(0, 10)('5')).toBe(true)
      expect(between(0, 10)('10')).toBe(true)
      expect(between(0, 10)('100')).toBe(false)
    })
  })
})
