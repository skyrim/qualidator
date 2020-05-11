import { ValidatorFunc } from '../../ValidatorType'

export function max(maxValue: number): ValidatorFunc<number> {
  return (value: number) => value <= maxValue
}
