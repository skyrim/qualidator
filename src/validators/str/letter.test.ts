import { letter, isLetter } from './letter'

describe('letters', () => {
  test('validate that a string contains only letters', () => {
    expect(letter('asdfghj')).toBe(true)
    expect(letter('абгд')).toBe(true)
    expect(letter('αβγδ')).toBe(true)

    expect(letter('123')).toBe(false)
    expect(letter('asd123')).toBe(false)
    expect(letter('asd asd')).toBe(false)
    expect(letter('asd!')).toBe(false)
    expect(letter('αβγδ αβγδ')).toBe(false)
  })

  test('test alias', () => {
    expect(isLetter).toBe(letter)
  })
})
