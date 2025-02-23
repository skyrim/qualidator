import { runValidator, type ValidatorType } from '../../ValidatorType'

export function not<T>(validator: ValidatorType<T>) {
  return (value: T) => !runValidator(validator, value)
}
