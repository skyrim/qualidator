import { ValidatorType } from '../../ValidatorType'

export function max(maxValue: number): ValidatorType<number> {
  return (value: number) => value <= maxValue
}
