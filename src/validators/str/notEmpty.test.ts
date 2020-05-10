import { notEmpty, isNotEmpty } from './notEmpty'

describe('notEmpty', () => {
  test('validate that a string is not empty', () => {
    expect(notEmpty('')).toBe(false)
    expect(notEmpty('asdf')).toBe(true)
  })

  test('test alias', () => {
    expect(isNotEmpty).toBe(notEmpty)
  })
})
