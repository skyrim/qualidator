import { undef, isUndef, isUndefined } from './undef'

describe('undef', () => {
  test('test undefined validator with undefined value', () => {
    expect(undef(undefined)).toBe(true)
  })

  test('test undefined validator with a value that is not undefined', () => {
    expect(undef('Hello' as any)).toBe(false)
  })

  test('test aliases', () => {
    expect(isUndef).toBe(undef)
    expect(isUndefined).toBe(undef)
  })
})
