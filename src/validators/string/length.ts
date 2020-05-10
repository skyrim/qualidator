export function length(minLength: number, maxLength?: number) {
  if (typeof maxLength === 'undefined') {
    return (value: string) => value.length >= minLength
  } else if (minLength === maxLength) {
    return (value: string) => value.length === minLength
  } else {
    return (value: string) =>
      value.length >= minLength && value.length <= maxLength
  }
}

export const lengthRange = length
export const minLength = (minLength: number) => length(minLength)
export const maxLength = (maxLength: number) => length(0, maxLength)
