import { int, isInt, isInteger } from './int'

describe('int', () => {
  test('validate that a string contains an integer', () => {
    expect(int('0')).toBe(true)
    expect(int('-0')).toBe(true) // ???
    expect(int('-1')).toBe(true)
    expect(int('-123')).toBe(true)
    expect(int('-1234567890')).toBe(true)
    expect(int('1')).toBe(true)
    expect(int('1234567890')).toBe(true)

    expect(int('')).toBe(false)
    expect(int('a')).toBe(false)
    expect(int('!')).toBe(false)
    expect(int('1234a')).toBe(false)
  })

  test('test alias', () => {
    expect(isInt).toBe(int)
    expect(isInteger).toBe(int)
  })
})