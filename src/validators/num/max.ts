import { ValidatorFunc } from '../../ValidatorType'

export function max(maxValue: number): ValidatorFunc<number | string> {
  return (value: number | string) => value <= maxValue
}
