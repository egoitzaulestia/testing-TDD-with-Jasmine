// ───────────────────────────────────────────────
// Ejercicio 1: Verificar si un número es par
// ───────────────────────────────────────────────
describe('Write a function called isEven that receives a number and returns true if the number is even, or false if it is odd', () => {
    it('should exist a variable called "isEven"', () => {
        // Arrange
        // Act
        // Assert
        expect(isEven).not.toBe(undefined);
    });

    it('should be a function', () => {
        expect(typeof isEven).toEqual('function');
    });

    it('should return a boolean', () => {
        expect(typeof isEven()).toEqual('boolean');
    });

    it('should be true for even numbers', () => {
        expect(isEven(2)).toBe(true);
    });

    it('should be false for odd number', () => {
        expect(isEven(3)).toBe(false);
    });

});

// ───────────────────────────────────────────────
// Ejercicio 2: Calcular el factorial de un número
// ───────────────────────────────────────────────
describe('Write a function called factorial that receives a non-negative integer and returns its factorial. If the number is 0, it must return 1.', () => {
    it('should exist a variable called "factorial"', () => {
        // Arrange
        // Act
        // Assert
        expect(factorial).not.toBe(undefined);
    });
    
    it('should be a function', () => {
        expect(typeof factorial).toEqual('function');
    });

    it('should return 1 when n = 0', () => {
        expect(factorial(0)).toBe(1);
    });

    it('should calculate factorials of positive integers', () => {
        expect(factorial(5)).toBe(120) // 5 x 4 x 3 x 2 x 1
    });

});
    