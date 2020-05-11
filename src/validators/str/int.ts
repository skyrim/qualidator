const intRegEx = /^-?\d+$/

export function int(value: string) {
  return intRegEx.test(value)
}

export const isInt = int
export const isInteger = int
