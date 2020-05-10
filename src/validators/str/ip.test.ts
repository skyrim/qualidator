import { ip, isIp } from './ip'

describe('ip', () => {
  test('validate string that contains an ip', () => {
    expect(ip('0.0.0.0')).toBe(true)
    expect(ip('127.0.0.0')).toBe(true)
    expect(ip('192.168.1.1')).toBe(true)
    expect(ip('255.255.255.255')).toBe(true)

    expect(ip('255.255.255.256')).toBe(false)
    expect(ip('255.255.255')).toBe(false)
    expect(ip('0 .0.0.0')).toBe(false)
    expect(ip('0.0.0.0 ')).toBe(false)
    expect(ip(' 0.0.0.0')).toBe(false)
    
    expect(ip('')).toBe(false)
    expect(ip('asd')).toBe(false)
    expect(ip('123')).toBe(false)
    expect(ip('!@#')).toBe(false)
  })

  test('test alias', () => {
    expect(isIp).toBe(ip)
  })
})
