import { lt, lesserThan } from './lt'

describe('lt', () => {
	test('test lt validator', () => {
		const isLesserThan10 = lt(10)

		expect(isLesserThan10(2)).toBe(true)
		expect(isLesserThan10(999)).toBe(false)
	})

	test('test alias', () => {
		expect(lesserThan).toBe(lt)
	})
})
