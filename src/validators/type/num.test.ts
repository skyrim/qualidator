import { num, number, isNum, isNumber } from './num'

describe('num', () => {
	test('test number validator with a number value', () => {
		expect(num(42)).toBe(true)
	})

	test('test number validator with a value that is not a number', () => {
		expect(num('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(number).toBe(num)
		expect(isNum).toBe(num)
		expect(isNumber).toBe(num)
	})
})
