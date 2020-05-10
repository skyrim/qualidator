import { uuid, isUuid } from './uuid'

describe('uuid', () => {
  test('validate that a string contains an uuid', () => {
    // expect(uuid('')).toBe(true)

    expect(uuid('v1')('')).toBe(false)
    expect(uuid('v1')('1234')).toBe(false)
    expect(uuid('v1')('asdf')).toBe(false)

    // TODO: more test cases
  })

  test('test alias', () => {
    expect(isUuid).toBe(uuid)
  })
})
