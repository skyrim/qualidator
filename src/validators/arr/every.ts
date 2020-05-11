import { ValidatorType } from '../../ValidatorType'

export function every(validator: ValidatorType): ValidatorType<any[]> {
  return (value: any[]) => value.every((a) => validator(a))
}

export const all = every
