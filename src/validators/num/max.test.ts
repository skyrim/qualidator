import { max } from './max'

describe('max', () => {
  test('validate number using maximum value', () => {
    expect(max(10)(1)).toBe(true)
    expect(max(10)(10)).toBe(true)
    expect(max(10)(100)).toBe(false)
  })

  test('validate string using maximum value', () => {
    expect(max(10)('1')).toBe(true)
    expect(max(10)('10')).toBe(true)
    expect(max(10)('100')).toBe(false)
  })
})
