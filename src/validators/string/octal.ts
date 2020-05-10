const octalRegEx = /^-?(0|0o)?[0-7]+$/i

export function octal(value: string) {
  return octalRegEx.test(value)
}

export const isOctal = octal
