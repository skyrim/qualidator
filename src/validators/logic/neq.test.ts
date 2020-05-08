import { neq, notEqual } from './neq'

describe('neq', () => {
	test('test neq validator', () => {
		expect(neq(10)(5)).toBe(true)
		expect(neq(1)(1)).toBe(false)
	})

	test('neq should also work on different types', () => {
		expect(neq('1')(2 as any)).toBe(true)
		expect(neq('1')({} as any)).toBe(true)
		expect(neq('1')(1 as any)).toBe(false)
	})

	test('test alias', () => {
		expect(notEqual).toBe(neq)
	})
})
