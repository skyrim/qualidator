import { Num } from './Num'
import { Str } from './Str'
import { Obj } from './Obj'
import { Arr } from './Arr'
import { Type } from './Type'
import { Bool } from './Bool'
import * as logic from '../validators/logic'
import { ValidatorBase } from './ValidatorBase'
import type { ValidatorType } from '../ValidatorType'
import {
  object,
  type Schema,
  type ObjectValidatorOptions
} from '../validators/obj'

export class Qualidator extends ValidatorBase {
  not(validator: ValidatorType<any>) {
    this.validators.push(logic.not(validator))
  }

  and(...validators: ValidatorType<any>[]) {
    this.validators.push(logic.and(...validators))
    return this
  }

  or(...validators: ValidatorType<any>[]) {
    this.validators.push(logic.or(...validators))
    return this
  }

  is(value: any) {
    this.validators.push(logic.is(value))
    return this
  }

  ident(value: any) {
    this.validators.push(logic.ident(value))
    return this
  }

  diff(value: any) {
    this.validators.push(logic.diff(value))
    return this
  }

  eq(value: any) {
    this.validators.push(logic.eq(value))
    return this
  }

  neq(value: any) {
    this.validators.push(logic.neq(value))
    return this
  }

  gt(value: any) {
    this.validators.push(logic.gt(value))
    return this
  }

  gteq(value: any) {
    this.validators.push(logic.gteq(value))
    return this
  }

  lt(value: any) {
    this.validators.push(logic.lt(value))
    return this
  }

  lteq(value: any) {
    this.validators.push(logic.lteq(value))
    return this
  }

  oneOf(...values: any[]) {
    this.validators.push(logic.oneOf(...values))
    return this
  }

  noneOf(...values: any[]) {
    this.validators.push(logic.noneOf(...values))
    return this
  }

  get type(): Type {
    return new Type(this.validators)
  }

  get bool() {
    return new Bool(this.validators)
  }

  get num() {
    return new Num(this.validators)
  }

  get str() {
    return new Str(this.validators)
  }

  obj(schema?: Schema, options?: ObjectValidatorOptions) {
    if (schema) {
      this.validators.push(object(schema, options))
    }

    return new Obj(this.validators)
  }

  get arr() {
    return new Arr(this.validators)
  }

  toFunction() {
    return (value: any) => this.validate(value)
  }
}
