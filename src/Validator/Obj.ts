import { ValidatorBase } from './ValidatorBase'
import { ValidatorType } from '../ValidatorType'
import * as type from '../validators/type'
// import * as obj from '../validators/obj'

export class Obj extends ValidatorBase {
  constructor(validators: ValidatorType[]) {
    super([type.obj, ...validators])
  }

  // TODO: add object validators e.g hasKey/hasProp, instanceOf, isPromise, isArray, 
}
