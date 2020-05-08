export function ident<T = any>(identValue: T) {
	return (value: T) => identValue === value
}

export const identical = ident
