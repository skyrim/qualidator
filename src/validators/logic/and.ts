import { ValidatorType } from '../../ValidatorType'

export function and<T = any>(...validators: ValidatorType<T>[]) {
	return (value: T) => validators.every((validator) => validator(value))
}
