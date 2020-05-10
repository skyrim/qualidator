import { empty, isEmpty } from './empty'

describe('empty', () => {
  test('validate that a string is empty', () => {
    expect(empty('')).toBe(true)
    expect(empty('asdfg')).toBe(false)
  })

  test('test alias', () => {
    expect(isEmpty).toBe(empty)
  })
})
