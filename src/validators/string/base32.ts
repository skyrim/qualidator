const base32RegEx = /^[A-Z2-7]+=*$/

export function base32(value: string) {
  return base32RegEx.test(value)
}

export const isBase32 = base32
