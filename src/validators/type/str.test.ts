import { str, isStr, isString } from './str'

describe('str', () => {
	test('test string validator with a string value', () => {
		expect(str('Hello, World!')).toBe(true)
	})

	test('test string validator with a non-string value', () => {
		expect(str(42 as any)).toBe(false)
	})

	describe('test aliases', () => {
		test('test isStr alias', () => {
			expect(isStr('Hello')).toBe(true)
		})

		test('test isString alias', () => {
			expect(isString('Hello')).toBe(true)
		})
	})
})
