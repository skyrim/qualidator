import { ValidatorType, ValidatorFunc, runValidator } from '../../ValidatorType'

export function every(validator: ValidatorType): ValidatorFunc<any[]> {
  return (value: any[]) => value.every((a) => runValidator(validator, a))
}

export const all = every
