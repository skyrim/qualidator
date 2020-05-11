import { words, isWords } from './words'

describe('words', () => {
  test('validate that a string contains only words', () => {
    expect(words('asdfghj')).toBe(true)
    expect(words('абгд')).toBe(true)
    expect(words('αβγδ')).toBe(true)
    expect(words('asdfghj asdfghj')).toBe(true)
    expect(words('asdfghj asdfghj ')).toBe(true)
    expect(words('абгд абгд')).toBe(true)
    expect(words('αβγδ αβγδ')).toBe(true)

    expect(words('123'))
    expect(words('asd123')).toBe(false)
    expect(words('asd!')).toBe(false)
    expect(words('αβγδ,αβγδ')).toBe(false)
    expect(words('αβγδ, αβγδ')).toBe(false)
    expect(words('a-b-c-d-e')).toBe(false)
  })

  test('test alias', () => {
    expect(isWords).toBe(words)
  })
})
