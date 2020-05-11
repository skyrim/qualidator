export type ValidatorFunc<T = any> = (value: T) => boolean
export interface ValidatorInterface<T = any> {
  validate(value: T): boolean
}

export type ValidatorType<T = any> = ValidatorFunc<T> | ValidatorInterface<T>

export function runValidator<T>(validator: ValidatorType<T>, value: T) {
  if (typeof validator === 'function') {
    return validator(value)
  } else {
    return validator.validate(value)
  }
}
