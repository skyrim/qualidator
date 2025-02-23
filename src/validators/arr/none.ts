import {
  runValidator,
  type ValidatorFunc,
  type ValidatorType
} from '../../ValidatorType'

export function none(validator: ValidatorType): ValidatorFunc<any[]> {
  return (value: any[]) => {
    return value.every((a) => !runValidator(validator, a))
  }
}
