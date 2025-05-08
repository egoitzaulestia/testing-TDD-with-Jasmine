// ───────────────────────────────────────────────
// Ejercicio 1: Verificar si un número es par
// ───────────────────────────────────────────────

const isEven = (num) => {
    return num % 2 === 0
}

// ───────────────────────────────────────────────
// Ejercicio 2: Calcular el factorial de un número
// ───────────────────────────────────────────────

const factorial = (n) => {
    // Validación básica
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('factorial: the argument should be an integer >= 0');
    }

    // Caso base
    if (n === 0) return 1;

    // Cálculo iterativo (sin recursión para evitar call-stack grande)
    let acc = 1;
    for (let i = 2; i <= n; i++) acc *= i;
    return acc;
}