import { runValidator, type ValidatorType } from '../../ValidatorType'

export function multiple(
  validator: ValidatorType<any>,
  separator: RegExp | string = ' '
) {
  return (value: string) =>
    value.split(separator).every((word) => runValidator(validator, word))
}

export const isMultiple = multiple
