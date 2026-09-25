// --------------------------------------------------
// CARGAR EL HEADER
// --------------------------------------------------

// fetch() permite solicitar un archivo al servidor.
// En este caso, solicitamos el archivo:
// componentes/header.html
fetch("componentes/header.html")

    // Cuando se recibe el archivo, se ejecuta este .then().
    // "respuesta" contiene la respuesta que nos ha enviado
    // el servidor.
    .then(respuesta => respuesta.text())

    // .text() convierte el contenido recibido en texto.
    // "datos" contiene ahora todo el código HTML
    // que había dentro de header.html.
    .then(datos => {

        // Buscamos en nuestra página el elemento que tiene:
        // id="header"
        //
        // Después, introducimos dentro de ese elemento
        // el contenido que hemos obtenido de header.html.
        document.getElementById("header").innerHTML = datos;
    });
// --------------------------------------------------
// CARGAR EL FOOTER
// --------------------------------------------------

// Volvemos a utilizar fetch(), esta vez para solicitar
// el archivo componentes/footer.html.
fetch("componentes/footer.html")

    // Cuando recibimos el archivo, obtenemos su contenido.
    .then(respuesta => respuesta.text())

    // "datos" contiene el código HTML de footer.html.
    .then(datos => {

        // Buscamos el elemento que tiene:
        // id="footer"
        //
        // Y dentro de él introducimos el contenido
        // del archivo footer.html.
        document.getElementById("footer").innerHTML = datos;
    });