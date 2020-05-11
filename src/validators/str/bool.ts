const boolRegEx = /^(true|false)$/i

export function bool(value: string) {
  return boolRegEx.test(value)
}

export const isBool = bool

export const isBoolean = bool
