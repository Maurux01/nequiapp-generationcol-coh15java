// encontrar el primar pago de un comercio y avisar la posicion en la que esta
// ademas al recorrer la lista debe ingorar movimientos de 0 (vacios)
// use break y continue
//
// Lista variada: incluye movimientos en 0 (vacios) y pagos a comercio
const movimientos = [
    { valor: 50000, tipo: "recarga" },
    { valor: 0, tipo: "vacio" },
    { valor: -12000, tipo: "retiro" },
    { valor: -25000, tipo: "pago_comercio" },
    { valor: 0, tipo: "vacio" },
    { valor: -8000, tipo: "pago_comercio" },
    { valor: 20000, tipo: "recarga" }
];

let posicionEncontrada = -1;

for (let i = 0; i < movimientos.length; i++) {
    // Parte A - filtrar: si el movimiento es 0, saltar esta vuelta
    if (movimientos[i].valor === 0) {
        console.log("Posicion " + i + ": movimiento vacio ($0), lo ignoramos con continue.");
        continue;
    }

    // Parte B - buscar: si es el pago a comercio que buscamos, mostrar posicion y detener
    if (movimientos[i].tipo === "pago_comercio") {
        posicionEncontrada = i;
        console.log("Primer pago a comercio encontrado en la posicion: " + posicionEncontrada);
        console.log("Detalle: valor " + movimientos[i].valor + ", tipo " + movimientos[i].tipo);
        break;
    }

    console.log("Posicion " + i + ": " + movimientos[i].tipo + " de $" + movimientos[i].valor + " (no es pago a comercio, seguimos).");
}

if (posicionEncontrada === -1) {
    console.log("No se encontro ningun pago a comercio.");
}




