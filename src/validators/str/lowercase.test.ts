import { lowercase, isLowercase } from './lowercase'

describe('lowercase', () => {
  test('validate that a string contains only lowercase characters', () => {
    expect(lowercase('')).toBe(true)
    expect(lowercase('a')).toBe(true)
    expect(lowercase('abc')).toBe(true)
    expect(lowercase('abc123')).toBe(true)
    expect(lowercase('abc123!@#')).toBe(true)

    expect(lowercase('A')).toBe(false)
    expect(lowercase('abcA')).toBe(false)
  })

  test('test alias', () => {
    expect(isLowercase).toBe(lowercase)
  })
})
