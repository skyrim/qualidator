const asciiRegex = /^[\x00-\x7F]+$/

export function ascii(value: string) {
  return asciiRegex.test(value)
}

export const isAscii = ascii
