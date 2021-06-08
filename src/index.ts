import { qv } from './Validator'
import * as validators from './validators'

export { ValidatorType } from './ValidatorType'

export { qv, qv as Qualidator, validators }
export default qv

declare const PACKAGE_VERSION: any
export const VERSION: string = PACKAGE_VERSION
