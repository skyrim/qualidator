import { base64, isBase64 } from './base64'

describe('base64', () => {
  test('validate that a string is in a base64 format', () => {
    expect(base64('aGVsbG8=')).toBe(true)
    expect(base64('this is not base64')).toBe(false)
  })

  test('test alias', () => {
    expect(isBase64).toBe(base64)
  })
})
