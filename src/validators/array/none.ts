import { Validator } from '../../Validator'

export function none(validator: Validator): Validator<any[]> {
  return (value: any[]) => {
    return value.every((a) => !validator(a))
  }
}
