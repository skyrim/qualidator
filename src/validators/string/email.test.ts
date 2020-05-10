import {email, isEmail} from './email'

describe('email', () => {
  test('validate that a string is an email', () => {
    expect(email('hello@test.com')).toBe(true)

    expect(email('test')).toBe(false)
    expect(email('test.com')).toBe(false)
    expect(email('@test.com')).toBe(false)
    expect(email('asdfghj')).toBe(false)
    expect(email('123456')).toBe(false)
    expect(email('!@#$%^&')).toBe(false)
  })

  test('test alias', () => {
    expect(isEmail).toBe(email)
  })
})