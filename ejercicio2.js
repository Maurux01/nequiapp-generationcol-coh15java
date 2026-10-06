// Parte 2
// instala localmente 'npm install prompt-sync'
const prompt = require('prompt-sync')();

function password() {
    const pinCorrecto = 8923
    let intento = prompt("Por favor, ingrese su pin: ");
    let numeroIntentos = 1

    while (Number(intento) != pinCorrecto) {
        console.log("El pin es incorrecto intente nuevamente")
        intento = prompt("Por favor, ingrese su pin nuevamente: ");
        numeroIntentos++;
    }

    console.log("bienvenido a nequi ^_^")
    return true;
}
// Solo pide el PIN si ejecutas este archivo directamente con: node ejercicio2.js
// Si lo llamas desde otro archivo con require('./ejercicio2'), no se ejecuta solo.
if (require.main === module) {
    password();
}

// Exportamos para poder usarlo en ejercicio3.js
module.exports = { password };