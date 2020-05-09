import { length, minLength, maxLength, lengthBetween } from './length'

describe('length', () => {
  test('validate array min length', () => {
    expect(length(10)([1, 2, 3])).toBe(false)
    expect(length(2)([1, 2, 3])).toBe(true)
    expect(length(2)(['hello', 'world'])).toBe(true)

    expect(minLength(10)([10, 20, 40, 80])).toBe(false)
    expect(minLength(2)([10, 20, 40, 80])).toBe(true)
  })

  test('validate array max length', () => {
    expect(length(0, 10)([1, 2, 3])).toBe(true)
    expect(length(0, 1)([1, 2, 3])).toBe(false)

    expect(maxLength(5)([4, 8, 15, 16])).toBe(true)
    expect(maxLength(5)([4, 8, 15, 16, 23, 42])).toBe(false)
  })

  test('validate array length in range', () => {
    expect(length(2, 4)([1, 2, 3])).toBe(true)
    expect(length(2, 4)([1, 2, 3, 4, 5, 6])).toBe(false)

    expect(lengthBetween(2, 4)([1, 2, 3])).toBe(true)
    expect(lengthBetween(2, 4)([1, 2, 3, 4, 5, 6])).toBe(false)
  })
})
