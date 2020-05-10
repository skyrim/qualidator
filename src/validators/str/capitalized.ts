const capitalizedRegEx = /^[A-Z]/

export function capitalized(value: string) {
  return capitalizedRegEx.test(value)
}

export const isCapitalized = capitalized
