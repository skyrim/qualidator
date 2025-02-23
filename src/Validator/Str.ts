import { ValidatorBase } from './ValidatorBase'
import type { ValidatorType } from '../ValidatorType'
import * as type from '../validators/type'
import * as str from '../validators/str'

export class Str extends ValidatorBase {
  constructor(validators: ValidatorType[]) {
    super([type.str, ...validators])
  }

  get alphanum() {
    this.validators.push(str.alphanum)
    return this
  }

  get alpha() {
    this.validators.push(str.alpha)
    return this
  }

  get ascii() {
    this.validators.push(str.ascii)
    return this
  }

  get base32() {
    this.validators.push(str.base32)
    return this
  }

  get base64() {
    this.validators.push(str.base64)
    return this
  }

  get bool() {
    this.validators.push(str.bool)
    return this
  }

  get capitalized() {
    this.validators.push(str.capitalized)
    return this
  }

  get rgb() {
    this.validators.push(str.rgb)
    return this
  }

  get rgba() {
    this.validators.push(str.rgba)
    return this
  }

  get hsl() {
    this.validators.push(str.hsl)
    return this
  }

  get hexColor() {
    this.validators.push(str.hexColor)
    return this
  }

  contains(substring: string) {
    this.validators.push(str.contains(substring))
    return this
  }

  get email() {
    this.validators.push(str.email)
    return this
  }

  get empty() {
    this.validators.push(str.empty)
    return this
  }

  get notEmpty() {
    this.validators.push(str.notEmpty)
    return this
  }

  get int() {
    this.validators.push(str.int)
    return this
  }

  get decimal() {
    this.validators.push(str.decimal)
    return this
  }

  get octal() {
    this.validators.push(str.octal)
    return this
  }

  get hexadecimal() {
    this.validators.push(str.hexadecimal)
    return this
  }

  get ip() {
    this.validators.push(str.ip)
    return this
  }

  get json() {
    this.validators.push(str.json)
    return this
  }

  length(minLength: number, maxLength?: number) {
    this.validators.push(str.length(minLength, maxLength))
    return this
  }

  get lowercase() {
    this.validators.push(str.lowercase)
    return this
  }

  get uppercase() {
    this.validators.push(str.uppercase)
    return this
  }

  regex(regularExpression: RegExp) {
    this.validators.push(str.regex(regularExpression))
    return this
  }

  get semver() {
    this.validators.push(str.semver)
    return this
  }

  get url() {
    this.validators.push(str.url)
    return this
  }

  get letter() {
    this.validators.push(str.letter)
    return this
  }

  get letternum() {
    this.validators.push(str.letternum)
    return this
  }

  get words() {
    this.validators.push(str.words)
    return this
  }

  get IBAN() {
    this.validators.push(str.IBAN)
    return this
  }

  get BIC() {
    this.validators.push(str.BIC)
    return this
  }

  get SWIFT() {
    this.validators.push(str.SWIFT)
    return this
  }

  multiple(validator: ValidatorType<any>, separator: RegExp | string = ' ') {
    this.validators.push(str.multiple(validator, separator))
    return this
  }
  uuid(version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5') {
    this.validators.push(str.uuid(version))
    return this
  }
}
