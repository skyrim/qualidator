import { ValidatorFunc } from '../../ValidatorType'

export function contains(substringOrItem: string): ValidatorFunc<string> {
  return (value: string | any[]) => {
    switch (typeof value) {
      case 'string': {
        return value.includes(substringOrItem)
      }
      case 'object': {
        if (Array.isArray(value)) {
          return value.includes(substringOrItem)
        }
      }
    }

    return false
  }
}
