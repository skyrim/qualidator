import { ident, identical } from './ident'

describe('ident', () => {
	test('test ident validator', () => {
		expect(ident(42)(42)).toBe(true)
	})

	test('ident should NOT work on different types', () => {
		expect(ident('1')(1 as any)).toBe(false)
	})

	test('trying to validate an object for identity must fail', () => {
		const identEmptyObj = ident({})
		const identLostNumbers = ident([4, 8, 15, 16, 21, 42])

		expect(identEmptyObj({})).toBe(false)
		expect(identLostNumbers([4, 8, 15, 16, 21, 42])).toBe(false)
	})

	test('test ident alias', () => {
		expect(identical).toBe(ident)
	})
})
