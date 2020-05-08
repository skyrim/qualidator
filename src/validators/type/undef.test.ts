import { undef, isUndef, isUndefined } from './undef'

describe('undef', () => {
	test('test undefined validator with undefined value', () => {
		expect(undef(undefined)).toBe(true)
	})

	test('test undefined validator with a value that is not undefined', () => {
		expect(undef('Hello' as any)).toBe(false)
	})

	describe('test aliases', () => {
		test('test alias isUndef', () => {
			expect(isUndef(undefined)).toBe(true)
		})

		test('test alias isUndefined', () => {
			expect(isUndefined(undefined)).toBe(true)
		})
	})
})
