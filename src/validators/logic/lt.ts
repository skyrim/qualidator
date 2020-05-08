export function lt<T = any>(ltValue: T) {
	return (value: T) => ltValue > value
}

export const lesserThan = lt
