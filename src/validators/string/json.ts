export function json(value: string) {
  try {
    JSON.parse(value)
    return true
  } catch {
    return false
  }
}

export const isJson = json
