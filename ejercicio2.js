// Parte 2
// instala localmente 'npm install prompt-sync'
const prompt = require('prompt-sync')();

const pin = 8923
let intento = 0
let entrada = prompt("Por favor, ingrese su pin: ");
let numero = Number(entrada);

while (numero != pin && intento < 2) {
    console.log("El pin es incorrecto intente nuevamente")
    let entrada = prompt("Por favor, ingrese su pin nuevamente: ");
    let numero = Number(entrada);
    intento++;
    
}if (numero === pin) {
    console.log("bienvenido a nequi")
    
}

