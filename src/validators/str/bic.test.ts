import { BIC, isBIC, SWIFT, isSWIFT } from './bic'

describe('bool', () => {
  test('validate that a string contains a boolean value', () => {
    expect(BIC('BARCGB22XXX')).toBe(true)
    expect(BIC('DEUTDEFFXXX')).toBe(true)
    expect(BIC('BNPAFRPPXXX')).toBe(true)

    expect(BIC('hello')).toBe(false)
    expect(BIC('this is just a random string')).toBe(false)
  })

  test('test aliases', () => {
    expect(isBIC).toBe(BIC)
    expect(SWIFT).toBe(BIC)
    expect(isSWIFT).toBe(BIC)
  })
})
