import { capitalized, isCapitalized } from './capitalized'

describe('capitalized', () => {
  test('validate that a string is capitalized', () => {
    expect(capitalized('Hello')).toBe(true)
    expect(capitalized('Hello, World!')).toBe(true)

    expect(capitalized('hELLO')).toBe(false)
    expect(capitalized('this is just a random string')).toBe(false)
  })

  test('test aliases', () => {
    expect(isCapitalized).toBe(capitalized)
  })
})
