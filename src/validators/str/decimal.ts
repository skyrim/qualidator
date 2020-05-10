const decimalRegEx = /^-?(\d+|\d*\.\d+)$/

// TODO: different locales

export function decimal(value: string) {
  return decimalRegEx.test(value)
}

export const isDecimal = decimal
