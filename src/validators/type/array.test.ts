import { array, isArray } from './array'

describe('array', () => {
	test('test array validator with an array value', () => {
		expect(array([4, 8, 15, 16, 23, 42])).toBe(true)
	})

	test('test array validator with a value that is not an array', () => {
		expect(array('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(isArray).toBe(array)
	})
})
