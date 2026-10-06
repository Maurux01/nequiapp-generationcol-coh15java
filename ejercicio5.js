// Ejercicio 5 - Varias cuentas a la vez
// Cada usuario tiene su propia lista de movimientos
// Usamos un bucle dentro de otro: el de afuera recorre usuarios,
// el de adentro recorre los movimientos de ese usuario.

const usuarios = [
    { nombre: "Mauro", movimientos: [50000, -12000, -8000, 20000] },
    { nombre: "Luisa", movimientos: [-25000, -15000, 60000, -5000] },
    { nombre: "Carlos", movimientos: [100000, -40000, -30000, -10000] }
];

// Bucle de afuera: recorre usuarios con un for
for (let i = 0; i < usuarios.length; i++) {
    // Dentro, por cada usuario, crea totalUsuario en 0
    // Debe reiniciarse a 0 en cada usuario, no una sola vez al principio,
    // porque si no se mezclaria el gasto de un usuario con el del anterior
    let totalUsuario = 0;

    // Bucle de adentro: recorre los movimientos de ese usuario
    for (let j = 0; j < usuarios[i].movimientos.length; j++) {
        // Solo sumamos el gasto: los movimientos negativos (plata que sale)
        if (Number(usuarios[i].movimientos[j]) < 0) {
            totalUsuario += Number(usuarios[i].movimientos[j]);
        }
    }

    // Al terminar el bucle de adentro (pero aun dentro del de afuera),
    // muestra el nombre del usuario y su total gastado
    console.log("Usuario: " + usuarios[i].nombre + " - Total gastado: $" + Math.abs(totalUsuario));
}
