import { obj, object, isObj, isObject } from './obj'

describe('obj', () => {
	test('test object validator with a object value', () => {
		expect(obj({ foo: 123, bar: 321 })).toBe(true)
	})

	test('test object validator with a value that is not a object', () => {
		expect(obj('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(object).toBe(obj)
		expect(isObj).toBe(obj)
		expect(isObject).toBe(obj)
	})
})
