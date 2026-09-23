
// Escribe un número u operación en la pantalla
function escribir(valor) {

    // Buscamos la pantalla
    let pantalla = document.getElementById("pantalla");

    // Si la pantalla tiene un 0, lo sustituimos
    if (pantalla.value == "0") {

        pantalla.value = valor;

    } else {

        // Si no, añadimos el nuevo valor
        pantalla.value = pantalla.value + valor;
    }
}


// Borra la pantalla
function borrar() {

    document.getElementById("pantalla").value = "0";
}


// Realiza la operación
function calcular() {

    // Buscamos la pantalla
    let pantalla = document.getElementById("pantalla");

    // Calculamos el contenido de la pantalla
    let resultado = eval(pantalla.value);

    // Mostramos el resultado
    pantalla.value = resultado;
}