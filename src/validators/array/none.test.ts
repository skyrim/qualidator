import { none } from './none'

describe('none', () => {
  test('validate array that no item is undefined', () => {
    const isUndefined = (value: any) => typeof value === 'undefined'

    expect(none(isUndefined)([1, 2, 3, 4])).toBe(true)
    expect(none(isUndefined)([4, 8, 15, 16, undefined, 42])).toBe(false)
  })
})
