import { finite, isFinite } from './finite'

describe('finite', () => {
  test('validate that a number is finite', () => {
    expect(finite(Infinity)).toBe(false)
    expect(finite(-Infinity)).toBe(false)
    expect(finite(0)).toBe(true)
    expect(finite(-1)).toBe(true)
    expect(finite(1)).toBe(true)
    expect(finite(42)).toBe(true)
  })

  test('test alias', () => {
    expect(isFinite).toBe(finite)
  })
})
