import type { ValidatorFunc } from '../../ValidatorType'

export type BasicTypes = 'undefined' | 'boolean' | 'number' | 'string' | 'bigint' | 'symbol' | 'object' | 'function'
export type ExtendedTypes = 'array'
export type AllTypes = BasicTypes | ExtendedTypes

export function type(type: 'undefined'): ValidatorFunc<undefined>
export function type(type: 'boolean'): ValidatorFunc<boolean>
export function type(type: 'number'): ValidatorFunc<number>
export function type(type: 'string'): ValidatorFunc<string>
export function type(type: 'bigint'): ValidatorFunc<BigInt>
export function type(type: 'symbol'): ValidatorFunc<Symbol>
export function type(type: 'function'): ValidatorFunc<Function>
export function type(type: 'object'): ValidatorFunc<{ [name: string]: any }>
export function type(type: 'array'): ValidatorFunc<any[]>

export function type(type: AllTypes): ValidatorFunc {
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
