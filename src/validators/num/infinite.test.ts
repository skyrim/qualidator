import { infinite, isInfinite } from './infinite'

describe('infinite', () => {
  test('validate that a number is infinite', () => {
    expect(infinite(Infinity)).toBe(true)
    expect(infinite(-Infinity)).toBe(true)
    expect(infinite(0)).toBe(false)
    expect(infinite(-1)).toBe(false)
    expect(infinite(1)).toBe(false)
    expect(infinite(42)).toBe(false)
  })

  test('test alias', () => {
    expect(isInfinite).toBe(infinite)
  })
})
