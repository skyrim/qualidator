import { str, isStr, isString } from './str'

describe('str', () => {
	test('test string validator with a string value', () => {
		expect(str('Hello, World!')).toBe(true)
	})

	test('test string validator with a non-string value', () => {
		expect(str(42 as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(isStr).toBe(str)
		expect(isString).toBe(str)
	})
})
