import { ValidatorFunc } from '../../ValidatorType'

export function length(min: number, max?: number): ValidatorFunc<any[]> {
  if (typeof max === 'undefined') {
    return (value: any[]) => value.length >= min
  } else {
    if (min === max) {
      return (value: any[]) => value.length === min
    } else {
      return (value: any[]) => value.length >= min && value.length <= max
    }
  }
}

export const minLength = (min: number) => length(min)

export const maxLength = (max: number) => length(0, max)

export const lengthBetween = (min: number, max: number) => length(min, max)
