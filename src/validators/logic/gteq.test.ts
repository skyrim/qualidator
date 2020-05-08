import { gteq, greaterThanOrEqual } from './gteq'

describe('gteq', () => {
	test('test gteq validator', () => {
		const isGreaterThanOrEqualToTen = gteq(10)

		expect(isGreaterThanOrEqualToTen(100)).toBe(true)
		expect(isGreaterThanOrEqualToTen(0)).toBe(false)
		expect(isGreaterThanOrEqualToTen(42)).toBe(true)
	})

	test('test alias', () => {
		expect(greaterThanOrEqual).toBe(gteq)
	})
})
