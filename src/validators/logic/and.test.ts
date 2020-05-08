import { and } from './and'

describe('and', () => {
	test('test and with a single validator', () => {
		const isAdult = (value: number) => value > 18
		const ageValidator = and(isAdult)

		expect(ageValidator(21)).toBe(true)
		expect(ageValidator(7)).toBe(false)
	})

	test('test and with multiple validators', () => {
		const isString = (value: string) => typeof value === 'string'
		const isNotEmpty = (value: string) => value.length > 0
		// naive email validator for testing purposes
		const isEmail = (value: string) => /^[A-Za-z][A-Za-z0-9]*@[A-Za-z][A-Za-z0-9]*\.com$/.test(value)

		const emailValidator = and(isString, isNotEmpty, isEmail)
		expect(emailValidator('ceo@company.com')).toBe(true)
		expect(emailValidator('thisisnotanemail.com')).toBe(false)
	})
})
