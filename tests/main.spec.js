describe('Escribe una función llamada esPar que reciba un número y devuelva true si el número es par, o false si es impar.', () => {
    it('should exist a variable named "esPar"', () => {
        // Arrange
        // Act
        // Assert
        expect(esPar).not.toBe(undefined)
    })

    it('should be a function', () => {

        expect(typeof esPar).toEqual('function')
    })

    it('should return a boolean', () => {
        expect(typeof esPar()).toEqual('boolean')
    })


})
    