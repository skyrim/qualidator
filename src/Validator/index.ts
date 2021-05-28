import { Type } from './Type'
import { Bool } from './Bool'
import { Num } from './Num'
import { Str } from './Str'
import { Obj } from './Obj'
import { Arr } from './Arr'
import { Qualidator } from './Qualidator'
import { ValidatorType } from '../ValidatorType'
import * as logic from '../validators/logic'
import { Schema, ObjectValidatorOptions } from '../validators/obj'

type QVType = {
  (): Qualidator
  not(validator: ValidatorType<any>): Qualidator
  and(...validators: ValidatorType<any>[]): Qualidator
  or(...validators: ValidatorType<any>[]): Qualidator
  is(value: any): Qualidator
  ident(value: any): Qualidator
  diff(value: any): Qualidator
  eq(value: any): Qualidator
  neq(value: any): Qualidator
  gt(value: any): Qualidator
  gteq(value: any): Qualidator
  lt(value: any): Qualidator
  lteq(value: any): Qualidator
  oneOf(...values: any[]): Qualidator
  noneOf(...values: any[]): Qualidator
  readonly type: Type
  readonly bool: Bool
  readonly num: Num
  readonly str: Str
  readonly arr: Arr
  obj(schema?: Schema, options?: ObjectValidatorOptions): Obj
}

export const qv: QVType = (() => new Qualidator()) as any

qv.not = (validator: ValidatorType<any>) => {
  return new Qualidator([logic.not(validator)])
}

qv.and = (...validators: ValidatorType<any>[]) => {
  return new Qualidator([logic.and(...validators)])
}

qv.or = (...validators: ValidatorType<any>[]) => {
  return new Qualidator([logic.or(...validators)])
}

qv.is = (value: any) => {
  return new Qualidator([logic.is(value)])
}

qv.ident = (value: any) => {
  return new Qualidator([logic.ident(value)])
}

qv.diff = (value: any) => {
  return new Qualidator([logic.diff(value)])
}

qv.eq = (value: any) => {
  return new Qualidator([logic.eq(value)])
}

qv.neq = (value: any) => {
  return new Qualidator([logic.neq(value)])
}

qv.gt = (value: any) => {
  return new Qualidator([logic.gt(value)])
}

qv.gteq = (value: any) => {
  return new Qualidator([logic.gteq(value)])
}

qv.lt = (value: any) => {
  return new Qualidator([logic.lt(value)])
}

qv.lteq = (value: any) => {
  return new Qualidator([logic.lteq(value)])
}

qv.oneOf = (...values: any[]) => {
  return new Qualidator([logic.oneOf(...values)])
}

qv.noneOf = (...values: any[]) => {
  return new Qualidator([logic.noneOf(...values)])
}

Object.defineProperty(qv, 'type', {
  enumerable: true,
  get: () => new Qualidator().type
})

Object.defineProperty(qv, 'bool', {
  enumerable: true,
  get: () => new Qualidator().bool
})

Object.defineProperty(qv, 'num', {
  enumerable: true,
  get: () => new Qualidator().num
})

Object.defineProperty(qv, 'str', {
  enumerable: true,
  get: () => new Qualidator().str
})

Object.defineProperty(qv, 'arr', {
  enumerable: true,
  get: () => new Qualidator().arr
})

qv.obj = (schema?: Schema, options?: ObjectValidatorOptions): Obj => {
  return new Qualidator().obj(schema, options)
}
