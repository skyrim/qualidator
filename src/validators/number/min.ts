import { Validator } from '../../Validator'

export function min(minValue: number): Validator<number> {
  return (value: number) => value >= minValue
}
