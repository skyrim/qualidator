import { Validator } from '../../Validator'

export function contains(substringOrItem: any): Validator {
	return (value: string | any[]) => {
		switch (typeof value) {
			case 'string': {
				return value.includes(substringOrItem)
			}
			case 'object': {
				if (Array.isArray(value)) {
					return value.includes(substringOrItem)
				}
			}
		}

		return false
	}
}
