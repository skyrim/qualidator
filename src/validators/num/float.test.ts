import { float, isFloat } from './float'

describe('float', () => {
  test('validate that a number is a float', () => {
    expect(float(10)).toBe(false)
    expect(float(42)).toBe(false)
    expect(float(10.1)).toBe(true)
  })

  test('validate a string that is a float', () => {
    expect(float('1.1')).toBe(true)
    expect(float('42')).toBe(false)
    expect(float('hello')).toBe(false)
  })

  test('invalid values', () => {
    expect(float(null as any)).toBe(false)
    expect(float(undefined as any)).toBe(false)
    expect(float(true as any)).toBe(false)
    expect(float(false as any)).toBe(false)
    expect(float({} as any)).toBe(false)
  })

  test('test alias', () => {
    expect(isFloat).toBe(float)
  })
})
