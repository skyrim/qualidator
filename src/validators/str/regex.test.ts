import { regex } from './regex'

describe('regex', () => {
  test('validate a string using regular expression', () => {
    const hasDotComAtTheEnd = regex(/\.com$/)

    expect(hasDotComAtTheEnd('test.com')).toBe(true)
    expect(hasDotComAtTheEnd('admin@test.com')).toBe(true)
    expect(hasDotComAtTheEnd('hello.org')).toBe(false)
    expect(hasDotComAtTheEnd('asdfgggh')).toBe(false)
  })
})
