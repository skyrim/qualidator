import { falsy, isFalsy } from './falsy'

describe('falsy', () => {
  test('validate that a value is falsy', () => {
    expect(falsy(true)).toBe(false)
    expect(falsy(false)).toBe(true)
    expect(falsy('')).toBe(true)
    expect(falsy('123')).toBe(false)
    expect(falsy(0)).toBe(true)
    expect(falsy(1)).toBe(false)
  })

  test('test alias', () => {
    expect(isFalsy).toBe(falsy)
  })
})
