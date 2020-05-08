import { not } from './not'

describe('not', () => {
	test('test not validator', () => {
		const isString = (val: string) => typeof val === 'string'
		const isNotString = not(isString)

		expect(isNotString('Hello!')).toBe(false)
		expect(isNotString(123 as any)).toBe(true)
		expect(isNotString(undefined as any)).toBe(true)
		expect(isNotString(true as any)).toBe(true)
		expect(isNotString({} as any)).toBe(true)
	})
})
