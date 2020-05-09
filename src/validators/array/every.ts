import { Validator } from '../../Validator'

export function every(validator: Validator): Validator<any[]> {
  return (value: any[]) => value.every((a) => validator(a))
}

export const all = every
