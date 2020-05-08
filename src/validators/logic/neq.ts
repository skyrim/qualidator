export function neq<T = any>(neqValue: T) {
	return (value: T) => neqValue != value
}

export const notEqual = neq
