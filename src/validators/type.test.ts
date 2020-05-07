import { type } from './type';

test('validate a string value with string type validator', () => {
	expect(type('string')('Hello, World!')).toBe(true);
});

test('validate a number value with string type validator', () => {
	expect(type('string')(123)).toBe(false);
});

test('validate a string value with number type validator', () => {
	expect(type('number')('Hello, World!')).toBe(false);
});

test('validate a number value with string type validator', () => {
	expect(type('number')(42)).toBe(true);
});

test('validate an undefined value with undefined type validator', () => {
	expect(type('undefined')(undefined)).toBe(true);
});

test('validate a boolean value with boolean type validator', () => {
	expect(type('boolean')(true)).toBe(true);
});

test('validate a bigint value with bigint type validator', () => {
	expect(type('bigint')(BigInt(1))).toBe(true);
});

test('validate a symbol value with undefined type validator', () => {
	expect(type('symbol')(Symbol())).toBe(true);
});

test('validate an object value with undefined type validator', () => {
	expect(type('object')({})).toBe(true);
});

test('validate a function value with undefined type validator', () => {
	expect(type('function')(() => {})).toBe(true);
});

test('validate an array value with array type validator', () => {
	expect(type('array')([])).toBe(true);
});

test('calling type for with an unknown type should throw an exception', () => {
    expect(() => type('thisisgarbage...' as any)).toThrow()
})