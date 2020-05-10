import { alphanum, isAlphaNumeric } from './alphanum'

describe('alphanum', () => {
  test('validate that a string contains only alpha and numeric characters', () => {
    expect(alphanum('hello')).toBe(true)
    expect(alphanum('Hello')).toBe(true)
    expect(alphanum('HELLO')).toBe(true)
    expect(alphanum('hello123')).toBe(true)
    expect(alphanum('Hello123')).toBe(true)
    expect(alphanum('HELLO123')).toBe(true)
    expect(alphanum('Hello, World!')).toBe(false)
  })

  test('test alias', () => {
    expect(isAlphaNumeric).toBe(alphanum)
  })
})
