import { bigint, isBigInt } from './bigint'

describe('bigint', () => {
	test('test bigint validator with a bigint value', () => {
		expect(bigint(BigInt(10000))).toBe(true)
	})

	test('test bigint validator with a value that is not a bigint', () => {
		expect(bigint('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(bigint).toBe(isBigInt)
	})
})
