export function infinite(value: number) {
  return !Number.isFinite(value)
}

export const isInfinite = infinite
