const letterRegEx = /^\p{L}*$/u

export function letter(value: string) {
  return letterRegEx.test(value)
}

export const isLetter = letter
