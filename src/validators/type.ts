import { Validator } from '../Validator';

type BasicTypes = 'undefined' | 'boolean' | 'number' | 'string' | 'bigint' | 'symbol' | 'object' | 'function';
type ExtendedTypes = 'array';

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
			return (value: any) => typeof value === type;
		}
		default: {
			if (type === 'array') {
				return (value: any) => Array.isArray(value);
			}
		}
	}

	throw new Error('Unknown type');
}
