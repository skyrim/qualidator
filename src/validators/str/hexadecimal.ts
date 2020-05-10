const hexadecimalRegEx = /^-?(0x|0h)?[0-9A-F]+$/i

export function hexadecimal(value: string) {
  return hexadecimalRegEx.test(value)
}

export const isHexadecimal = hexadecimal
