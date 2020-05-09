export function float(value: number): boolean {
  return !Number.isInteger(value)
}

export const isFloat = float
