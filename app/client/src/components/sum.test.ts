import { sum } from './sum';

describe('sum function', () => {
    it('should add two numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    it('should handle zero correctly', () => {
        expect(sum(0, 0)).toBe(0);
        expect(sum(5, 0)).toBe(5);
        expect(sum(0, -5)).toBe(-5);
    });

    it('should handle large numbers', () => {
        expect(sum(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });
});
