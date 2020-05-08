export function lteq<T = any>(ltValue: T) {
	return (value: T) => ltValue >= value
}

export const lesserThanOrEqual = lteq
