const base64RegEx = /^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/i

export function base64(value: string) {
  return base64RegEx.test(value)
}

export const isBase64 = base64
