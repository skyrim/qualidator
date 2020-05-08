export function eq<T = any>(eqValue: T) {
	return (value: T) => eqValue == value
}

export const equal = eq
