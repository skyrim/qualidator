import { Validator } from '../../Validator'

export function range(min: number, max?: number): Validator<number> {
  if (typeof max === 'undefined') {
    return (value) => value >= min
  } else {
    if (min === max) {
      return (value) => value === min
    } else {
      return (value) => value >= min && value <= max
    }
  }
}

export const between = (min: number, max: number) => range(min, max)
