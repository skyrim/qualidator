import { letternum, isLetternum } from './letternum'

describe('letternum', () => {
  test('validate that a string contains only letters and numbers', () => {
    expect(letternum('asdfghj')).toBe(true)
    expect(letternum('абгд')).toBe(true)
    expect(letternum('αβγδ')).toBe(true)
    expect(letternum('123')).toBe(true)
    expect(letternum('asd123')).toBe(true)

    expect(letternum('asd asd')).toBe(false)
    expect(letternum('asd!')).toBe(false)
    expect(letternum('αβγδ αβγδ')).toBe(false)
  })

  test('test alias', () => {
    expect(isLetternum).toBe(letternum)
  })
})
