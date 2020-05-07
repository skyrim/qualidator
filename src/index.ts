// declare const PACKAGE_VERSION: any
// export const VERSION: string = PACKAGE_VERSION

type Validator = (value: any) => boolean

export function makeValidator(type: 'undefined'): Validator
export function makeValidator(type: 'boolean'): Validator
export function makeValidator(type: 'number'): Validator
export function makeValidator(type: 'string'): Validator
export function makeValidator(type: 'bigint'): Validator
export function makeValidator(type: 'symbol'): Validator
export function makeValidator(type: 'function'): Validator
export function makeValidator(type: 'object'): Validator
export function makeValidator(type: 'array'): Validator

export function makeValidator(type: any): Validator {
  if (typeof type === 'string') {
    switch (type) {
      case 'undefined':
      case 'boolean':
      case 'number':
      case 'string':
      case 'bigint':
      case 'symbol':
      case 'function':
      case 'object': {
        return (value: any) => typeof value === type
      }
      case 'array': {
        return (value: any) => Array.isArray(value)
      }
    }
  }

  throw new Error('Invalid input type')
}
