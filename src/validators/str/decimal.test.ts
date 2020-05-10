import { decimal, isDecimal } from './decimal'

describe('decimal', () => {
  test('validate that a string is a decimal', () => {
    expect(decimal('0')).toBe(true)
    expect(decimal('-1')).toBe(true)
    expect(decimal('1')).toBe(true)
    expect(decimal('1.0')).toBe(true)
    expect(decimal('0.1')).toBe(true)
    expect(decimal('.123')).toBe(true)
    expect(decimal('123.123')).toBe(true)

    expect(decimal('123.')).toBe(false)
    expect(decimal('sdfgh')).toBe(false)
  })

  test('test alias', () => {
    expect(isDecimal).toBe(decimal)
  })
})
