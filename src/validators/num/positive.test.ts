import { positive } from './positive'

describe('positive', () => {
  test('validate number', () => {
    expect(positive(1)).toBe(true)
    expect(positive(0)).toBe(false)
    expect(positive(-1)).toBe(false)
  })

  test('validate string', () => {
    expect(positive('1')).toBe(true)
    expect(positive('0')).toBe(false)
    expect(positive('-1')).toBe(false)
    expect(positive('hello')).toBe(false)
  })

  test('validate other types', () => {
    expect(positive(null as any)).toBe(false)
    expect(positive(undefined as any)).toBe(false)
    expect(positive(true as any)).toBe(false)
    expect(positive(false as any)).toBe(false)
    expect(positive({} as any)).toBe(false)
  })
})
