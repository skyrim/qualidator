import { is } from './is'

describe('is', () => {
	test('test is validator', () => {
		expect(is(42)(42)).toBe(true)
		expect(is(42)(123)).toBe(false)

		expect(is('hello')('hello')).toBe(true)
		expect(is('hello')('world')).toBe(false)
	})

	// TODO
})
