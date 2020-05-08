import { bool, isBool } from './bool'

describe('bool', () => {
	test('test boolean validator with a boolean value', () => {
		expect(bool(false)).toBe(true)
	})

	test('test undefined validator with a value that is not undefined', () => {
		expect(bool('Hello' as any)).toBe(false)
	})

	describe('test aliases', () => {
		test('test isBool alias', () => {
			expect(isBool(true)).toBe(true)
		})

		test('test isBoolean alias', () => {
			expect(isBool(true)).toBe(true)
		})
	})
})
