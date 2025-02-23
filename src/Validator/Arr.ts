import { ValidatorBase } from './ValidatorBase'
import type { ValidatorType } from '../ValidatorType'
import * as type from '../validators/type'
import * as arr from '../validators/arr'

export class Arr extends ValidatorBase {
  constructor(validators: ValidatorType[]) {
    super([type.arr, ...validators])
  }

  none(validator: ValidatorType<any>) {
    this.validators.push(arr.none(validator))
    return this
  }

  all(validator: ValidatorType<any>) {
    this.validators.push(arr.all(validator))
    return this
  }

  every(validator: ValidatorType<any>) {
    this.validators.push(arr.every(validator))
    return this
  }

  length(minLength: number, maxLength?: number) {
    this.validators.push(arr.length(minLength, maxLength))
    return this
  }

  min(minLength: number) {
    this.validators.push(arr.minLength(minLength))
    return this
  }

  max(maxLength: number) {
    this.validators.push(arr.maxLength(maxLength))
    return this
  }

  
}
