import { float, isFloat } from './float'

describe('float', () => {
  test('validate that a number is a float', () => {
    expect(float(10)).toBe(false)
    expect(float(42)).toBe(false)
    expect(float(10.1)).toBe(true)
  })

  test('test alias', () => {
    expect(isFloat).toBe(float)
  })
})
