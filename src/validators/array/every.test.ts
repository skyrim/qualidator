import { every, all } from './every'
import { type } from '../type'
import { object } from '../object'

describe('every', () => {
  test('validate every where each item is a number', () => {
    const numberArrayValidator = every(type('number'))

    expect(numberArrayValidator([1, 2, 3])).toBe(true)
  })

  test('validate every where each item is a number', () => {
    const numberArrayValidator = every(type('number'))

    expect(numberArrayValidator([1, 2, 3])).toBe(true)
  })

  test('validate every of objects', () => {
    const schema = {
      age: type('number'),
      height: type('number')
    }

    const arr = [
      { age: 10, height: 150 },
      { age: 12, height: 155 }
    ]

    expect(every(object(schema))(arr)).toBe(true)
  })

  test('validate every of number with object validator', () => {
    const schema = {
      age: type('number'),
      height: type('number')
    }

    const arr = [1, 2]

    expect(every(object(schema))(arr)).toBe(false)
  })

  test('validate tuple of number and object with object validator', () => {
    const schema = {
      age: type('number'),
      height: type('number')
    }

    const arr = [1, { age: 1, height: 10 }]

    expect(every(object(schema))(arr)).toBe(false)
  })

  test('test alias', () => {
    expect(all).toBe(every)
  })
})
