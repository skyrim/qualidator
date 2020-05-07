import { array } from './array'
import { type } from './type'
import { object } from './object'

describe('array', () => {
	test('validate array where each item is a number', () => {
		const numberArrayValidator = array(type('number'))

		expect(numberArrayValidator([1, 2, 3])).toBe(true)
	})

	test('validate array where each item is a number', () => {
		const numberArrayValidator = array(type('number'))

		expect(numberArrayValidator([1, 2, 3])).toBe(true)
	})

	test('validate array of objects', () => {
		const schema = {
			age: type('number'),
			height: type('number')
		}

		const arr = [
			{ age: 10, height: 150 },
			{ age: 12, height: 155 }
		]

		expect(array(object(schema))(arr)).toBe(true)
	})

	test('validate array of number with object validator', () => {
		const schema = {
			age: type('number'),
			height: type('number')
		}

		const arr = [1, 2]

		expect(array(object(schema))(arr)).toBe(false)
	})

	test('validate tuple of number and object with object validator', () => {
		const schema = {
			age: type('number'),
			height: type('number')
		}

		const arr = [1, { age: 1, height: 10 }]

		expect(array(object(schema))(arr)).toBe(false)
	})
})
