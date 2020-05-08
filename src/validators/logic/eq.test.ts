import { eq, equal } from './eq'

describe('eq', () => {
	test('test eq validator', () => {
		expect(eq(42)(42)).toBe(true)
	})

	test('eq should also work on different types', () => {
		expect(eq('1')(1 as any)).toBe(true)
	})

	test('trying to validate an object for equality must fail', () => {
		const eqEmptyObj = eq({})
		const eqLostNumbers = eq([4, 8, 15, 16, 21, 42])

		expect(eqEmptyObj({})).toBe(false)
		expect(eqLostNumbers([4, 8, 15, 16, 21, 42])).toBe(false)
	})

	test('test alias', () => {
		expect(equal).toBe(eq)
	})
})
