import { semver, isSemver } from './semver'

describe('semver', () => {
  test('validate that a string contains a semver', () => {
    expect(semver('1.0.0')).toBe(true)
    // TODO: more test cases
  })

  test('test alias', () => {
    expect(isSemver).toBe(semver)
  })
})
