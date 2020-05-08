import { Validator } from '../../Validator'

type BasicTypes = 'undefined' | 'boolean' | 'number' | 'string' | 'bigint' | 'symbol' | 'object' | 'function'
type ExtendedTypes = 'array'

export function type(type: 'undefined'): Validator<undefined>
export function type(type: 'boolean'): Validator<boolean>
export function type(type: 'number'): Validator<number>
export function type(type: 'string'): Validator<string>
export function type(type: 'bigint'): Validator<BigInt>
export function type(type: 'symbol'): Validator<Symbol>
export function type(type: 'function'): Validator<Function>
export function type(type: 'object'): Validator<{ [name: string]: any }>
export function type(type: 'array'): Validator<any[]>

export function type(type: BasicTypes | ExtendedTypes): Validator {
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
		default: {
			throw new Error('Unknown type')
		}
	}
}
