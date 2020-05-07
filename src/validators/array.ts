import { Validator } from '../Validator'

export function array(validator: Validator) {
	return (value: any[]) => value.every((a) => validator(a))
}
