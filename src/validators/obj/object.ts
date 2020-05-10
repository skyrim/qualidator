import { Validator } from '../../Validator'

type Schema = { [name: string]: Schema | Validator }

type ObjectValidatorOptions = {
	exact?: boolean
}

export function object(schema: Schema, options?: ObjectValidatorOptions): Validator<{ [name: string]: any }> {
	if (typeof schema !== 'object') {
		throw new Error('Invalid schema type. Schema must be an object')
	}

	const isExact = options && options.exact

	function schemaValidator(value: any, schema: Schema): boolean {
		if (typeof value !== 'object') {
			return false
		}

		if (isExact && Object.keys(value).length !== Object.keys(schema).length) {
			return false
		}

		const result = Object.keys(schema).reduce((prev, cur) => {
			const schemaMember = schema[cur]

			if (typeof schemaMember === 'function') {
				return prev && schemaMember(value[cur])
			} else {
				return prev && schemaValidator(value[cur], schemaMember)
			}
		}, true)

		return result
	}

	return (value) => schemaValidator(value, schema)
}
