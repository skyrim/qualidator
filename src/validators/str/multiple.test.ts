import { multiple, isMultiple } from './multiple'
import { ascii } from './ascii'
import { letter } from './letter'

describe('words', () => {
  test('validate that a string contains only words', () => {
    expect(multiple(ascii)('asdfghj')).toBe(true)
    expect(multiple(ascii)('абгд')).toBe(false)

    expect(multiple(letter, ', ')('asdfghj, asdfghj')).toBe(true)
    expect(multiple(letter, '-')('asdfghj, asdfghj')).toBe(false)

    expect(multiple(letter, / ?,?/)('asdfghj, asdfghj')).toBe(true)
    expect(multiple(letter, / ?,?/)('asdfghj,asdfghj')).toBe(true)
    expect(multiple(letter, / ?,?/)('asdfghj ,asdfghj')).toBe(true)
    expect(multiple(letter, / ?,?/)('asdfghj-asdfghj')).toBe(false)
  })

  test('test alias', () => {
    expect(isMultiple).toBe(multiple)
  })
})
