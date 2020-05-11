import { ValidatorType, runValidator } from '../../ValidatorType'

export function or<T = any>(...validators: ValidatorType<T>[]) {
  return (value: T) =>
    validators.some((validator) => runValidator(validator, value))
}
