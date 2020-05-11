import { ValidatorType } from '../../ValidatorType'

export type BasicTypes = 'undefined' | 'boolean' | 'number' | 'string' | 'bigint' | 'symbol' | 'object' | 'function'
export type ExtendedTypes = 'array'
export type AllTypes = BasicTypes | ExtendedTypes

export function type(type: 'undefined'): ValidatorType<undefined>
export function type(type: 'boolean'): ValidatorType<boolean>
export function type(type: 'number'): ValidatorType<number>
export function type(type: 'string'): ValidatorType<string>
export function type(type: 'bigint'): ValidatorType<BigInt>
export function type(type: 'symbol'): ValidatorType<Symbol>
export function type(type: 'function'): ValidatorType<Function>
export function type(type: 'object'): ValidatorType<{ [name: string]: any }>
export function type(type: 'array'): ValidatorType<any[]>

export function type(type: AllTypes): ValidatorType {
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
