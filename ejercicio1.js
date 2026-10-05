// parte 1 - codigo completamente hecho por mauro infante/ maurux01
const movimientos = [1200, -24000, +50000, -4000, +5000, -14000]

//*Antes del bucle, crea una variable total en 0 y otra cantidadRetiros en 0. Piensa por qué deben  empezar en 0.
// counter initializers
let total = 0
let cantidadRetiros = 0

//^Usa un bucle for que recorra la lista desde la primera posición hasta la última.
//!Dentro del bucle, en cada vuelta suma el valor actual a total
// Sigue dentro del bucle: usa un if para preguntar si el movimiento es un retiro (por ejemplo, si su valor es negativo). Si lo es, súmale 1 a cantidadRetiros
for (let i = 0; i < movimientos.length; i++) {
    total += Number(movimientos[i]);  // Suma el valor actual al total

    if (Number(movimientos[i]) < 0) {  // Si es negativo, es un retiro
        cantidadRetiros++;
    }

}
//~ fuera del bucle
console.log("Lista de movimientos:", movimientos); 
console.log("Cantidad total de retiros:", cantidadRetiros);
console.log("El saldo final (total) es:", total); // ¡Esta era la línea que faltaba!




