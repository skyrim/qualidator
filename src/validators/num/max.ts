import { Validator } from '../../Validator'

export function max(maxValue: number): Validator<number> {
  return (value: number) => value <= maxValue
}
