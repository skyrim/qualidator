import { or } from './or'

describe('or', () => {
	test('test or with multiple validators', () => {
		const isNumber = (value: number) => typeof value === 'number'
		const isString = (value: string) => typeof value === 'string'

		const numberOrString = or<any>(isNumber, isString)

		expect(numberOrString('this is a string')).toBe(true)
		expect(numberOrString(42 as any)).toBe(true)
		expect(numberOrString({ an: 'object' } as any)).toBe(false)
	})
})
