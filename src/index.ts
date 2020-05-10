export { Validator } from './Validator'
export * as type from './validators/type'
export * as logic from './validators/logic'
export * as number from './validators/number'
export * as string from './validators/string'
export * as object from './validators/object'
export * as array from './validators/array'

declare const PACKAGE_VERSION: any
export const VERSION: string = PACKAGE_VERSION
