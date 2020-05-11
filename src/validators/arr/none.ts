import { ValidatorFunc, ValidatorType, runValidator } from '../../ValidatorType'

export function none(validator: ValidatorType): ValidatorFunc<any[]> {
  return (value: any[]) => {
    return value.every((a) => !runValidator(validator, a))
  }
}
