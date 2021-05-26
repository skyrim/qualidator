export function integer(value: number | string): boolean {
  const parsedValue = +value
  return !Number.isNaN(parsedValue) && Number.isInteger(parsedValue)
}

export const isInt = integer
export const isInteger = integer
