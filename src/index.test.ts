import { makeValidator } from './index'

test('create a string validator and validate a string', () => {
  const strVal = makeValidator('string')

  expect(strVal('Hello, World!')).toBe(true)
})

test('create a string validator and validate a number', () => {
  const strVal = makeValidator('string')

  expect(strVal(12345)).toBe(false)
})

test('create a number validator and validate a number', () => {
  const strVal = makeValidator('number')

  expect(strVal(42)).toBe(true)
})

test('create a number validator and validate a string', () => {
  const strVal = makeValidator('number')

  expect(strVal('42')).toBe(false)
})

test('create a boolean validator and validate a boolean', () => {
  const strVal = makeValidator('boolean')

  expect(strVal(true)).toBe(true)
})

test('create an undefined validator and validate an undefined value', () => {
  const undefinedVal = makeValidator('undefined')

  expect(undefinedVal(undefined)).toBe(true)
})

test('create an object validator and validate an object', () => {
  const undefinedVal = makeValidator('object')

  expect(undefinedVal({ name: 'Stefan', age: 29 })).toBe(true)
})

test('create an array validator and validate an array', () => {
  const undefinedVal = makeValidator('array')

  expect(undefinedVal([4, 8, 15, 16, 23, 42])).toBe(true)
})

test('expect an exception when invalid type is given', () => {
  expect(() => makeValidator('thisisgarbage...' as any)).toThrow()
})