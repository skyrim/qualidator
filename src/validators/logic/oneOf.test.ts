import { oneOf } from './oneOf'

describe('oneOf', () => {
  test('cases', () => {
    expect(oneOf(1)(1)).toBe(true)
    expect(oneOf(2)(1)).toBe(false)
    expect(oneOf(1, 2, 3)(1)).toBe(true)
    expect(oneOf(1, 2, 3)(4)).toBe(false)
    expect(oneOf('hello')('hello')).toBe(true)
    expect(oneOf('hello', 'world')('hello')).toBe(true)
    expect(oneOf('hello', 'world')('test')).toBe(false)
    expect(oneOf(false)(true)).toBe(false)
    expect(oneOf(true, false)(true)).toBe(true)
  })
})
