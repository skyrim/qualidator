import { letters } from './letters'
import { multiple } from './multiple'

export function words(value: string) {
  return multiple(letters, /\s/)(value)
}

export const isWords = words
