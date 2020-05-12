const letternumRegEx = /^[\p{L}\p{N}]*$/u

export function letternum(value: string) {
  return letternumRegEx.test(value)
}

export const isLetternum = letternum
