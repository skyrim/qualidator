import { gt, greaterThan } from './gt'

describe('gt', () => {
	test('test gt validator', () => {
		const isGreaterThan10 = gt(10)
		expect(isGreaterThan10(100)).toBe(true)
		expect(isGreaterThan10(0)).toBe(false)
		expect(isGreaterThan10(999999)).toBe(true)

		const isGreaterThan0 = gt(0)
		expect(isGreaterThan0(-1)).toBe(false)
		expect(isGreaterThan0(1)).toBe(true)
	})

	test('test alias', () => {
		expect(greaterThan).toBe(gt)
	})
})
