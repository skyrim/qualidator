import { obj, object, isObj, isObject } from './obj'

describe('obj', () => {
	test('test object validator with a object value', () => {
		expect(obj({ foo: 123, bar: 321 })).toBe(true)
	})

	test('test object validator with a value that is not a object', () => {
		expect(obj('Hello' as any)).toBe(false)
	})

	describe('test aliases', () => {
		test('test alias object', () => {
			expect(object({ foo: 123, bar: 321 })).toBe(true)
		})

		test('test alias isObj', () => {
			expect(isObj({ foo: 123, bar: 321 })).toBe(true)
		})

		test('test alias isObject', () => {
			expect(isObject({ foo: 123, bar: 321 })).toBe(true)
		})
	})
})
