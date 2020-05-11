import { ValidatorBase } from './ValidatorBase'
import * as type from '../validators/type'

export class Type extends ValidatorBase {
  get undef() {
    this.validators.push(type.undef)
    return this
  }

  get bool() {
    this.validators.push(type.bool)
    return this
  }

  get num() {
    this.validators.push(type.num)
    return this
  }

  get str() {
    this.validators.push(type.str)
    return this
  }

  get bigint() {
    this.validators.push(type.bigint)
    return this
  }

  get symbol() {
    this.validators.push(type.symbol)
    return this
  }

  get obj() {
    this.validators.push(type.obj)
    return this
  }

  get array() {
    this.validators.push(type.array)
    return this
  }

  get func() {
    this.validators.push(type.func)
    return this
  }
}
