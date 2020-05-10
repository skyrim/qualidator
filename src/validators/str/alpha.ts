const alphaRegEx = /^[A-Z]*$/i

export function alpha(value: string) {
  // TODO: locales
  return alphaRegEx.test(value)
}

export const isAlpha = alpha
