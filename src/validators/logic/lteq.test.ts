import { lteq, lesserThanOrEqual } from './lteq'

describe('lteq', () => {
	test('test lteq validator', () => {
		const isLesserThanOrEqualToTen = lteq(10)

		expect(isLesserThanOrEqualToTen(100)).toBe(false)
		expect(isLesserThanOrEqualToTen(0)).toBe(true)
		expect(isLesserThanOrEqualToTen(42)).toBe(false)
	})

	test('test alias', () => {
		expect(lesserThanOrEqual).toBe(lteq)
	})
})
