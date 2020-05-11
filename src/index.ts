import { qv } from './Validator'
import * as type from './validators/type'
import * as logic from './validators/logic'
import * as bool from './validators/bool'
import * as num from './validators/num'
import * as str from './validators/str'
import * as obj from './validators/obj'
import * as arr from './validators/arr'

export { ValidatorType } from './ValidatorType'

export { qv }
export const validators = { type, logic, bool, num, str, obj, arr }

declare const PACKAGE_VERSION: any
export const VERSION: string = PACKAGE_VERSION
