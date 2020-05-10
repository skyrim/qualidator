export function nan(value: number) {
  return Number.isNaN(value)
}

export const isNan = nan

export function notNan(value: number) {
  return !Number.isNaN(value)
}

export const isNotNan = notNan
