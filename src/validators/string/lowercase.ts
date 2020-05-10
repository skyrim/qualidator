const lowercaseRegEx = /^[^A-Z]*$/

export function lowercase(value: string) {
  return lowercaseRegEx.test(value)
}

export const isLowercase = lowercase
