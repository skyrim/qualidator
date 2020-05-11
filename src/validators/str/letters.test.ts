import { letters, isLetters } from './letters'

describe('letters', () => {
  test('validate that a string contains only letters', () => {
    expect(letters('asdfghj')).toBe(true)
    expect(letters('абгд')).toBe(true)
    expect(letters('αβγδ')).toBe(true)

    expect(letters('123'))
    expect(letters('asd123')).toBe(false)
    expect(letters('asd asd')).toBe(false)
    expect(letters('asd!')).toBe(false)
    expect(letters('αβγδ αβγδ')).toBe(false)
  })

  test('test alias', () => {
    expect(isLetters).toBe(letters)
  })
})
