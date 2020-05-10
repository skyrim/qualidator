export function regex(regularExpression: RegExp) {
  return (value: string) => regularExpression.test(value)
}
