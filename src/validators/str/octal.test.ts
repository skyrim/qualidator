import { octal, isOctal } from './octal'

describe('octal', () => {
  test('validate that a string contains octal number', () => {
    expect(octal('0')).toBe(true)
    expect(octal('1')).toBe(true)
    expect(octal('01')).toBe(true)
    expect(octal('07')).toBe(true)
    expect(octal('010')).toBe(true)
    expect(octal('0o1')).toBe(true)
    expect(octal('0o7')).toBe(true)
    expect(octal('0o10')).toBe(true)
    expect(octal('-01')).toBe(true)
    expect(octal('-0123')).toBe(true)

    expect(octal('8')).toBe(false)
    expect(octal('08')).toBe(false)
    expect(octal('9')).toBe(false)
    expect(octal('a')).toBe(false)
    expect(octal('asdfg')).toBe(false)
    expect(octal('!@#$%')).toBe(false)
  })

  test('test alias', () => {
    expect(isOctal).toBe(octal)
  })
})
