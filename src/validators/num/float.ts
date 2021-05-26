export function float(value: number | string): boolean {
  const parsedValue = +value
  return !Number.isNaN(parsedValue) && !Number.isInteger(+parsedValue);
}

export const isFloat = float;
