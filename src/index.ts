export { ValidatorType } from './ValidatorType'
export * as type from './validators/type'
export * as logic from './validators/logic'
export * as bool from './validators/bool'
export * as num from './validators/num'
export * as str from './validators/str'
export * as obj from './validators/obj'
export * as arr from './validators/arr'

declare const PACKAGE_VERSION: any
export const VERSION: string = PACKAGE_VERSION
