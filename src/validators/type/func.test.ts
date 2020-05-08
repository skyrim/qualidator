import { func, isFunc, isFunction } from './func'

describe('func', () => {
	test('test function validator with a function value', () => {
		expect(func(() => 'hello')).toBe(true)
	})

	test('test function validator with a value that is not a function', () => {
		expect(func('Hello' as any)).toBe(false)
	})

	test('test aliases', () => {
        expect(isFunc).toBe(func)
        expect(isFunction).toBe(func)
	})
})
