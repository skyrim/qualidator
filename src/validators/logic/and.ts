import { Validator } from '../../Validator'

export function and<T = any>(...validators: Validator<T>[]) {
	return (value: T) => validators.every((validator) => validator(value))
}
