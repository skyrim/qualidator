import { num, number, isNum, isNumber } from './num'

describe('num', () => {
	test('test number validator with a number value', () => {
		expect(num(42)).toBe(true)
	})

	test('test number validator with a value that is not a number', () => {
		expect(num('Hello' as any)).toBe(false)
	})

	describe('test aliases', () => {
		test('test alias number', () => {
			expect(number(1)).toBe(true)
		})

		test('test alias isNum', () => {
			expect(isNum(1)).toBe(true)
		})

		test('test alias isNumber', () => {
			expect(isNumber(1)).toBe(true)
		})
	})
})
