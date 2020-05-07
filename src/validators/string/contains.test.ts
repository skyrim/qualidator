import { contains } from './contains'

describe('contains', () => {
	describe('validate contains on an invalid type', () => {
		test('using a number', () => {
			expect(contains(42)(1)).toBe(false)
		})
	})

	describe('validate contains on a string', () => {
		test('when there is a substring', () => {
			expect(contains('test')('this is a test')).toBe(true)
		})

		test('when there is no substring', () => {
			expect(contains('hello')('this is a test')).toBe(false)
		})
	})

	describe('validate contains on an array', () => {
		test('when there is an item', () => {
			expect(contains(21)([4, 8, 15, 16, 21, 43])).toBe(true)
		})

		test('when there is no item', () => {
			expect(contains(1337)([4, 8, 15, 16, 21, 43])).toBe(false)
		})
	})
})
