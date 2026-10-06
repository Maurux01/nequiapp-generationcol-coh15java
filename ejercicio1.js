// parte 1 - codigo completamente hecho por mauro infante/ maurux01
const movimientos = [1200, -24000, +50000, -4000, +5000, -14000]

//*Antes del bucle, crea una variable total en 0 y otra cantidadRetiros en 0. Piensa por qué deben  empezar en 0.
// counter initializers
// Lo envolvemos en una función para poder LLAMARLO desde ejercicio3.js
function calcularResumen(lista) {
    let total = 0
    let cantidadRetiros = 0

    //^Usa un bucle for que recorra la lista desde la primera posición hasta la última.
    //!Dentro del bucle, en cada vuelta suma el valor actual a total
    // Sigue dentro del bucle: usa un if para preguntar si el movimiento es un retiro (por ejemplo, si su valor es negativo). Si lo es, súmale 1 a cantidadRetiros
    for (let i = 0; i < lista.length; i++) {
        total += Number(lista[i]);  // Suma el valor actual al total

        if (Number(lista[i]) < 0) {  // Si es negativo, es un retiro
            cantidadRetiros++;
        }
    }

    return { total, cantidadRetiros }
}

//~ fuera del bucle
// Solo muestra en consola si ejecutas este archivo directamente con: node ejercicio1.js
// Si lo llamas desde otro archivo con require('./ejercicio1'), no se imprime solo.
if (require.main === module) {
    const resultado = calcularResumen(movimientos);
    console.log("Lista de movimientos:", movimientos);
    console.log("Cantidad total de retiros:", resultado.cantidadRetiros);
    console.log("El saldo final (total) es:", resultado.total); // ¡Esta era la línea que faltaba!
}

// Exportamos para poder usarlo en ejercicio3.js
module.exports = { movimientos, calcularResumen };




