import type { ValidatorFunc } from '../../ValidatorType'

export function range(
  min: number,
  max?: number
): ValidatorFunc<number | string> {
  if (typeof max === 'undefined') {
    return (value) => +value >= min
  }
  if (min === max) {
    return (value) => +value === min
  }
  return (value) => +value >= min && +value <= max
}

export const between = (min: number, max: number) => range(min, max)
