import { ValidatorFunc } from '../../ValidatorType'

export function min(minValue: number): ValidatorFunc<number> {
  return (value: number) => value >= minValue
}
