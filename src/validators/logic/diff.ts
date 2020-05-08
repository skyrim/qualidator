export function diff<T = any>(diffValue: T) {
	return (value: T) => diffValue !== value
}

export const different = diff
