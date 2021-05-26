import { negative } from './negative'

describe('negative', () => {
  test('validate number', () => {
    expect(negative(1)).toBe(false)
    expect(negative(0)).toBe(false)
    expect(negative(-1)).toBe(true)
  })

  test('validate string', () => {
    expect(negative('1')).toBe(false)
    expect(negative('0')).toBe(false)
    expect(negative('-1')).toBe(true)
  })

  test('invalid values', () => {
    expect(negative('hello')).toBe(false)
    expect(negative(null as any)).toBe(false)
    expect(negative(undefined as any)).toBe(false)
    expect(negative(true as any)).toBe(false)
    expect(negative(false as any)).toBe(false)
    expect(negative({} as any)).toBe(false)
  })
})
