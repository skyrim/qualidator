const isBICReg = /^[A-z]{4}[A-z]{2}\w{2}(\w{3})?$/

export function BIC(value: string) {
  return isBICReg.test(value)
}

export const isBIC = BIC
export const SWIFT = BIC
export const isSWIFT = BIC
