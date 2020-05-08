export function gteq<T = any>(gteqValue: T) {
	return (value: T) => gteqValue <= value
}

export const greaterThanOrEqual = gteq
