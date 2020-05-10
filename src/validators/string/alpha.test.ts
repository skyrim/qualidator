import { alpha, isAlpha } from './alpha'

describe('alpha', () => {
  test('validate that a string contains only alpha characters', () => {
    expect(alpha('hello')).toBe(true)
    expect(alpha('Hello')).toBe(true)
    expect(alpha('HELLO')).toBe(true)
    expect(alpha('Hello, World!')).toBe(false)
  })

  test('test alias', () => {
    expect(isAlpha).toBe(alpha)
  })
})
