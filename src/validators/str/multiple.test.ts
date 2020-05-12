import { multiple, isMultiple } from './multiple'
import { ascii } from './ascii'
import { letters } from './letters'

describe('words', () => {
  test('validate that a string contains only words', () => {
    expect(multiple(ascii)('asdfghj')).toBe(true)
    expect(multiple(ascii)('абгд')).toBe(false)

    expect(multiple(letters, ', ')('asdfghj, asdfghj')).toBe(true)
    expect(multiple(letters, '-')('asdfghj, asdfghj')).toBe(false)

    expect(multiple(letters, / ?,?/)('asdfghj, asdfghj')).toBe(true)
    expect(multiple(letters, / ?,?/)('asdfghj,asdfghj')).toBe(true)
    expect(multiple(letters, / ?,?/)('asdfghj ,asdfghj')).toBe(true)
    expect(multiple(letters, / ?,?/)('asdfghj-asdfghj')).toBe(false)
  })

  test('test alias', () => {
    expect(isMultiple).toBe(multiple)
  })
})
