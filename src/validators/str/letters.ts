const lettersRegEx = /^\p{L}*$/u

export function letters(value: string) {
  return lettersRegEx.test(value)
}

export const isLetters = letters
