import { Validator } from '../../Validator'

export function not<T>(validator: Validator<T>) {
	return (value: T) => !validator(value)
}
