const ipv4RegEx = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
// TODO: ip v6

export function ip(value: string) {
  return ipv4RegEx.test(value)
}

export const isIp = ip
