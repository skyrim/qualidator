import { symbol, isSymbol } from './symbol'

describe('symbol', () => {
	test('test symbol validator with a symbol value', () => {
		expect(symbol(Symbol())).toBe(true)
	})

	test('test bigint validator with a value that is not a bigint', () => {
		expect(symbol('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
		expect(isSymbol).toBe(symbol)
	})
})
