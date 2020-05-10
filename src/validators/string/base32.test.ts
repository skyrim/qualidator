import { base32, isBase32 } from './base32'

describe('base32', () => {
  test('validate that a string is in a base32 format', () => {
    expect(base32('NBSWY3DP')).toBe(true)
    expect(base32('this is not base32')).toBe(false)
  })

  test('test alias', () => {
    expect(isBase32).toBe(base32)
  })
})
