import { nan, isNan, notNan, isNotNan } from './nan'

describe('nan', () => {
  test('validate that a value is NaN', () => {
    expect(nan(NaN)).toBe(true)
    expect(nan(42)).toBe(false)
  })

  test('validate that a value is not NaN', () => {
    expect(notNan(NaN)).toBe(false)
    expect(notNan(42)).toBe(true)
  })

  test('test alises', () => {
    expect(isNan).toBe(nan)
    expect(isNotNan).toBe(notNan)
  })
})
