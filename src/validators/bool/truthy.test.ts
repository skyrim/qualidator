import { truthy, isTruthy } from './truthy'

describe('truthy', () => {
  test('validate that a value is truthy', () => {
    expect(truthy(0)).toBe(false)
    expect(truthy(1)).toBe(true)
    expect(truthy('')).toBe(false)
    expect(truthy('hello')).toBe(true)
    expect(truthy(true)).toBe(true)
    expect(truthy(false)).toBe(false)
  })

  test('test alias', () => {
    expect(isTruthy).toBe(truthy)
  })
})
