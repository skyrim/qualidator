import { range, between } from './range'

describe('range', () => {
  test('validate number using minimum value', () => {
    expect(range(10)(1)).toBe(false)
    expect(range(10)(10)).toBe(true)
    expect(range(10)(100)).toBe(true)
  })

  test('validate number using maximum value', () => {
    expect(range(0, 10)(1)).toBe(true)
    expect(range(0, 10)(10)).toBe(true)
    expect(range(0, 10)(100)).toBe(false)
  })

  test('validate number using range', () => {
    expect(range(0, 10)(-1)).toBe(false)
    expect(range(0, 10)(0)).toBe(true)
    expect(range(0, 10)(5)).toBe(true)
    expect(range(0, 10)(10)).toBe(true)
    expect(range(0, 10)(100)).toBe(false)
  })

  test('validate number using between should be the same as range', () => {
    expect(between(0, 10)(-1)).toBe(false)
    expect(between(0, 10)(0)).toBe(true)
    expect(between(0, 10)(5)).toBe(true)
    expect(between(0, 10)(10)).toBe(true)
    expect(between(0, 10)(100)).toBe(false)
  })
})
