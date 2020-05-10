import { integer, isInt, isInteger } from './integer'

describe('integer', () => {
  test('validate that a number is integer', () => {
    expect(integer(10)).toBe(true)
    expect(integer(42)).toBe(true)
    expect(integer(10.1)).toBe(false)
  })

  test('test alises', () => {
    expect(isInt).toBe(integer)
    expect(isInteger).toBe(integer)
  })
})
