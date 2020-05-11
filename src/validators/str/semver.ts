const semverRegEx = /^(\d+\.)?(\d+\.)?(\*|\d+)$/

export function semver(value: string) {
  return semverRegEx.test(value)
}

export const isSemver = semver
