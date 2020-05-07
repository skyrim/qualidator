import { object } from './object'
import { type } from './type'

describe('object', () => {
	describe('invalid parameters', () => {
		test('calling object with non-object value must throw an exception', () => {
			expect(() => object(123 as any)).toThrow()
		})

		test('calling object validator with a non-object must return false', () => {
			expect(object({})(123 as any)).toBe(false)
		})
	})

	test('validate empty object with empty object schema', () => {
		expect(object({})({})).toBe(true)
	})

	describe('validating object that has more properties than the schema', () => {
		test('using empty schema', () => {
			const person = {
				name: 'Stefan',
				age: 29
			}

			expect(object({})(person)).toBe(true)
		})

		test('using empty schema', () => {
			const person = {
				name: 'Stefan',
				age: 29
			}

			const schema = {
				name: type('string')
			}

			expect(object(schema)(person)).toBe(true)
		})
	})

	test('validating object with a schema that has all propeties defined', () => {
		const person = {
			name: 'Stefan',
			age: 29
		}

		const schema = {
			name: type('string'),
			age: type('number')
		}

		expect(object(schema)(person)).toBe(true)
	})

	test('validating object that does not have all properties in schema', () => {
		const person = {
			name: 'Stefan'
		}

		const schema = {
			name: type('string'),
			age: type('number')
		}

		expect(object(schema)(person)).toBe(false)
	})

	test('validating nested object with a valid schema', () => {
		const person = {
			name: 'Stefan',
			stats: {
				age: 29,
				height: 190,
				weight: 86
			}
		}

		const schema = {
			name: type('string'),
			stats: {
				age: type('number'),
				height: type('number'),
				weight: type('number')
			}
		}

		expect(object(schema)(person)).toBe(true)
	})

	test('validating nested object that is missing a property in the schema', () => {
		const person = {
			name: 'Stefan',
			stats: {
				age: 29,
				// missing height
				weight: 86
			}
		}

		const personValidator = object({
			name: type('string'),
			stats: {
				age: type('number'),
				height: type('number'),
				weight: type('number')
			}
		})

		expect(personValidator(person)).toBe(false)
	})

	describe('validate with exact option set to true', () => {
		test('when object has more properties than the schema', () => {
			const person = {
				name: 'Stefan',
				age: 29
			}

			const schema = {
				name: type('string')
			}

			expect(object(schema, { exact: true })(person)).toBe(false)
		})

		test('when nested object has more properties than the schema', () => {
			const person = {
				name: 'Stefan',
				stats: {
					age: 29,
					height: 190,
					weight: 86
				}
			}

			const personValidator = object(
				{
					name: type('string'),
					stats: {
						age: type('number'),
						height: type('number')
					}
				},
				{ exact: true }
			)

			expect(personValidator(person)).toBe(false)
		})
	})
})
