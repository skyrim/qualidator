import { ValidatorFunc } from '../../ValidatorType'

export function min(minValue: number): ValidatorFunc<number | string> {
  return (value: number | string) => value >= minValue
}
