import { bool, isBool, isBoolean } from './bool'

describe('bool', () => {
  test('validate that a string contains a boolean value', () => {
    expect(bool('true')).toBe(true)
    expect(bool('false')).toBe(true)
    expect(bool('True')).toBe(true)
    expect(bool('False')).toBe(true)
    expect(bool('TRUE')).toBe(true)
    expect(bool('FALSE')).toBe(true)

    expect(bool('hello')).toBe(false)
    expect(bool('this is just a random string')).toBe(false)
  })

  test('test aliases', () => {
    expect(isBool).toBe(bool)
    expect(isBoolean).toBe(bool)
  })
})
