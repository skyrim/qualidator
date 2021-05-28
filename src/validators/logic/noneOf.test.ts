import { noneOf } from './noneOf'

describe('noneOf', () => {
  test('cases', () => {
    expect(noneOf(1)(1)).toBe(false)
    expect(noneOf(2)(1)).toBe(true)
    expect(noneOf(1, 2, 3)(1)).toBe(false)
    expect(noneOf(1, 2, 3)(4)).toBe(true)
    expect(noneOf('hello')('hello')).toBe(false)
    expect(noneOf('hello', 'world')('hello')).toBe(false)
    expect(noneOf('hello', 'world')('test')).toBe(true)
    expect(noneOf(false)(true)).toBe(true)
    expect(noneOf(true, false)(true)).toBe(false)
  })
})
