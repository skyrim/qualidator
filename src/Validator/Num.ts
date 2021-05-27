import { ValidatorBase } from './ValidatorBase'
import { ValidatorType } from '../ValidatorType'
import * as type from '../validators/type'
import * as num from '../validators/num'
import * as logic from '../validators/logic'

export class Num extends ValidatorBase {
  constructor(validators: ValidatorType[]) {
    super([logic.or<any>(type.num, type.str), ...validators])
  }

  get finite() {
    this.validators.push(num.finite)
    return this
  }

  get infinite() {
    this.validators.push(num.infinite)
    return this
  }

  get nan() {
    this.validators.push(num.nan)
    return this
  }

  get int() {
    this.validators.push(num.integer)
    return this
  }

  get float() {
    this.validators.push(num.float)
    return this
  }

  get positive() {
    this.validators.push(num.positive)
    return this
  }

  get negative() {
    this.validators.push(num.negative)
    return this
  }

  max(maxValue: number) {
    this.validators.push(num.max(maxValue))
    return this
  }

  min(minValue: number) {
    this.validators.push(num.min(minValue))
    return this
  }

  range(minValue: number, maxValue?: number) {
    this.validators.push(num.range(minValue, maxValue))
    return this
  }
}
