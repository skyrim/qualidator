import { qv } from './index'

describe('qv', () => {
  test('cases', () => {
    expect(qv.oneOf(1, 2, 3).validate(1)).toBe(true)
    expect(qv.noneOf(1, 2, 3).validate(1)).toBe(false)
  })
})
