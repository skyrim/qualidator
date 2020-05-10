import { length, lengthRange, minLength, maxLength } from './length'

describe('length', () => {
  test('validate a string min length', () => {
    expect(length(3)('Hello')).toBe(true)
    expect(length(10)('Hello')).toBe(false)

    expect(minLength(3)('Hello')).toBe(true)
    expect(minLength(10)('Hello')).toBe(false)
  })

  test('validate a string max length', () => {
    expect(length(0, 3)('Hello')).toBe(false)
    expect(length(0, 10)('Hello')).toBe(true)

    expect(maxLength(3)('Hello')).toBe(false)
    expect(maxLength(10)('Hello')).toBe(true)
  })

  test('validate that a string length is in range', () => {
    expect(length(4, 8)('Hello')).toBe(true)
    expect(length(4, 8)('Hello, World!')).toBe(false)
  })

  test('test alias', () => {
    expect(lengthRange).toBe(length)
  })
})
