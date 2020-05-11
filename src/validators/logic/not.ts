import { ValidatorType } from '../../ValidatorType'

export function not<T>(validator: ValidatorType<T>) {
	return (value: T) => !validator(value)
}
