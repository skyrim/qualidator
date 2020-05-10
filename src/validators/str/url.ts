export function url(value: string) {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

export const isUrl = url
