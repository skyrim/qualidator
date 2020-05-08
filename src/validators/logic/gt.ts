export function gt<T = any>(gtValue: T) {
	return (value: T) => gtValue < value
}

export const greaterThan = gt
