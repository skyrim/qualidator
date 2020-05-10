import { json, isJson } from './json'

describe('json', () => {
  test('validate string that contains a json', () => {
    expect(json('1234')).toBe(true)
    expect(json('true')).toBe(true)
    expect(json('{}')).toBe(true)
    expect(json('[]')).toBe(true)
    expect(json('{"name": "Stefan"}')).toBe(true)

    expect(json('')).toBe(false)
    expect(json('asdf')).toBe(false)
    expect(json('{age: 29}')).toBe(false)
    
  })

  test('test alias', () => {
    expect(isJson).toBe(json)
  })
})
