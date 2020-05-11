import { ValidatorBase } from './ValidatorBase'
import { ValidatorType } from '../ValidatorType'
import * as type from '../validators/type'
import * as bool from '../validators/bool'

export class Bool extends ValidatorBase {
  constructor(validators: ValidatorType[]) {
    super([type.bool, ...validators])
  }

  get truthy() {
    this.validators.push(bool.truthy)
    return this
  }

  get falsy() {
    this.validators.push(bool.falsy)
    return this
  }
}
