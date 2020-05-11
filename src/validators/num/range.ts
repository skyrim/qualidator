import { ValidatorType } from '../../ValidatorType'

export function range(min: number, max?: number): ValidatorType<number> {
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
