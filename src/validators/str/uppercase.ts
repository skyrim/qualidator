const uppercaseRegEx = /^[^a-z]*$/

export function uppercase(value: string) {
  return uppercaseRegEx.test(value)
}

export const isUppercase = uppercase
