import { ValidatorFunc } from '../../ValidatorType'

export function oneOf<T>(...values: T[]): ValidatorFunc<T> {
  return (value: T) => !!values.find((a) => a === value)
}
