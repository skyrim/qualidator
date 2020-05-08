import { Validator } from '../../Validator'

export function or<T = any>(...validators: Validator<T>[]) {
	return (value: T) => validators.some((validator) => validator(value))
}
