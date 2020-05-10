const alphaNumRegEx = /^[A-Z0-9]*$/i

export function alphanum(value: string) {
  return alphaNumRegEx.test(value)
}

export const isAlphaNumeric = alphanum
