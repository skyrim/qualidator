import { ValidatorFunc } from '../../ValidatorType'

export function noneOf<T>(...values: T[]): ValidatorFunc<T> {
  return (value: T) => !values.find((a) => a === value)
}
