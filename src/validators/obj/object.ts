import type { ValidatorType, ValidatorFunc } from '../../ValidatorType'

export type Schema = { [name: string]: Schema | ValidatorType<any> }

export type ObjectValidatorOptions = {
  exact?: boolean
}

export function object(
  schema: Schema,
  options?: ObjectValidatorOptions
): ValidatorFunc<{ [name: string]: any }> {
  if (typeof schema !== 'object') {
    throw new Error('Invalid schema type. Schema must be an object')
  }

  const isExact = !!options?.exact

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
      }
      if (typeof schemaMember.validate === 'function') {
        return prev && schemaMember.validate(value[cur])
      }
      return prev && schemaValidator(value[cur], schemaMember as Schema)
    }, true)

    return result
  }

  return (value) => schemaValidator(value, schema)
}
