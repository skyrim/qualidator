import { hexadecimal, isHexadecimal } from './hexadecimal'

describe('hexadecimal', () => {
  test('validate that a string is a hexadecimal number', () => {
    expect(hexadecimal('0')).toBe(true)
    expect(hexadecimal('1')).toBe(true)
    expect(hexadecimal('f')).toBe(true)
    expect(hexadecimal('123abc')).toBe(true)
    expect(hexadecimal('f0f')).toBe(true)
    expect(hexadecimal('-1')).toBe(true)
    expect(hexadecimal('-f')).toBe(true)
    expect(hexadecimal('-f0f')).toBe(true)
  
    expect(hexadecimal('0x0')).toBe(true)
    expect(hexadecimal('0x1')).toBe(true)
    expect(hexadecimal('0xf')).toBe(true)
    expect(hexadecimal('0x1f2345bcd')).toBe(true)

    expect(hexadecimal('0h0')).toBe(true)
    expect(hexadecimal('0h1')).toBe(true)
    expect(hexadecimal('0hf')).toBe(true)
    expect(hexadecimal('0h1f2345bcd')).toBe(true)

    expect(hexadecimal('0x')).toBe(false)
    expect(hexadecimal('0xg')).toBe(false)
    expect(hexadecimal('asdfgh')).toBe(false)
  })

  test('test alias', () => {
    expect(isHexadecimal).toBe(hexadecimal)
  })
})
