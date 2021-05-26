export function negative(value: number | string) {
  return (typeof value === 'number' || typeof value === 'string') && +value < 0
}
