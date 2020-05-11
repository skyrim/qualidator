import { ValidatorType, ValidatorInterface } from '../ValidatorType'

export abstract class ValidatorBase implements ValidatorInterface {
  protected validators: ValidatorType<any>[]

  constructor(validators: ValidatorType[] = []) {
    this.validators = validators
  }

  validate(value: any) {
    return this.validators.every((validate) => {
      if (typeof validate === 'function') {
        return validate(value)
      } else {
        return validate.validate(value)
      }
    })
  }
}
