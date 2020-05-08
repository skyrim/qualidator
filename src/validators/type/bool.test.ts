import { bool, isBool, isBoolean } from './bool'

describe('bool', () => {
	test('test boolean validator with a boolean value', () => {
		expect(bool(false)).toBe(true)
	})

	test('test undefined validator with a value that is not undefined', () => {
		expect(bool('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(isBool).toBe(bool)
		expect(isBoolean).toBe(bool)
	})
})
