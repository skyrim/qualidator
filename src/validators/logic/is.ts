export function is<T = any>(isValue: T) {
	return (value: T) => Object.is(isValue, value)
}
