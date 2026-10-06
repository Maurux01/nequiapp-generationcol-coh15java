const prompt = require('prompt-sync')();

let opcion;

do {
    console.log('\n=== MENU NEQUI ===');
    console.log('1) Ver saldo');
    console.log('2) Enviar dinero');
    console.log('3) Recargar');
    console.log('4) Salir');

    opcion = prompt('Elige una opcion (1-4): ');

    if (opcion === '1') {
        console.log('Tu saldo es: $125.000');
    } else if (opcion === '2') {
        console.log('Vas a enviar dinero...');
    } else if (opcion === '3') {
        console.log('Vas a recargar...');
    } else if (opcion === '4') {
        console.log('Saliendo...');
    } else {
        console.log('Opcion no valida, intenta de nuevo.');
    }

} while (opcion !== '4');

console.log('Gracias por usar Nequi, hasta luego!');
