export function nan(value: number | string) {
  return Number.isNaN(value)
}

export const isNan = nan

export function notNan(value: number | string) {
  return !Number.isNaN(value)
}

export const isNotNan = notNan
