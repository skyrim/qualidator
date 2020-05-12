import { letter } from './letter'
import { multiple } from './multiple'

export function words(value: string) {
  return multiple(letter, /\s/)(value)
}

export const isWords = words
