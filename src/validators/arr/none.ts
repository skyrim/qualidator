import { ValidatorType } from '../../ValidatorType'

export function none(validator: ValidatorType): ValidatorType<any[]> {
  return (value: any[]) => {
    return value.every((a) => !validator(a))
  }
}
