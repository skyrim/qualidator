import { min } from './min'

describe('min', () => {
  test('validate number using minimum value', () => {
    expect(min(10)(1)).toBe(false)
    expect(min(10)(10)).toBe(true)
    expect(min(10)(100)).toBe(true)
  })
})
