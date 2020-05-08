import { diff, different } from './diff'

describe('diff', () => {
	test('test diff validator', () => {
		expect(diff(42)(42)).toBe(false)
		expect(diff(42)(40)).toBe(true)
	})

	test('neq should also work on different types', () => {
		expect(diff(42)('42' as any)).toBe(true)
		expect(diff(42)('40' as any)).toBe(true)
		expect(diff(false)('' as any)).toBe(true)
	})

	test('test ident alias', () => {
		expect(different).toBe(diff)
	})
})
