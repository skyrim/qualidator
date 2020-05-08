export { Validator } from './Validator'
export * as type from './validators/type'
export * as logic from './validators/logic'
export { object } from './validators/object'

declare const PACKAGE_VERSION: any
export const VERSION: string = PACKAGE_VERSION
