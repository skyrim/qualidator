import {uppercase, isUppercase} from './uppercase'

describe('uppercase', () => {
  test('validate that a string contains only uppercase characters', () => {
    expect(uppercase('')).toBe(true)
    expect(uppercase('A')).toBe(true)
    expect(uppercase('ABCDEFG')).toBe(true)
    expect(uppercase('ABC123')).toBe(true)
    expect(uppercase('ABC123!@#')).toBe(true)

    expect(uppercase('a')).toBe(false)
    expect(uppercase('ABCa')).toBe(false)
  })

  test('test alias', () => {
    expect(isUppercase).toBe(uppercase)
  })
})