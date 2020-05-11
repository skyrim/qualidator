import { ValidatorType } from '../../ValidatorType'

export function min(minValue: number): ValidatorType<number> {
  return (value: number) => value >= minValue
}
