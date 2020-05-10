import { url, isUrl } from './url'

// TODO: more test cases

describe('url', () => {
  test('validate that a string contains a url', () => {
    expect(url('http://test.com')).toBe(true)
    expect(url('https://test.com')).toBe(true)

    expect(url('test.com')).toBe(false)
    expect(url('aaaaaaa')).toBe(false)
    expect(url('123')).toBe(false)
  })

  test('test alias', () => {
    expect(isUrl).toBe(url)
  })
})
