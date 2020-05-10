import { ascii, isAscii } from './ascii'

describe('ascii', () => {
  test('validate that a string contains ascii characters', () => {
    expect(ascii('hello')).toBe(true)
    expect(ascii('123')).toBe(true)
    expect(ascii('HELLO')).toBe(true)
    expect(ascii('hello123')).toBe(true)
    expect(ascii('Hello123')).toBe(true)
    expect(ascii('Hello, World!')).toBe(true)
    expect(ascii('Здраво!')).toBe(false)
    expect(ascii('Γεια σας!')).toBe(false)
  })

  test('test alias', () => {
    expect(isAscii).toBe(ascii)
  })
})
