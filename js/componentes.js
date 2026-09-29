const raizProyecto = new URL("../", document.currentScript.src);

async function cargarComponente(archivo, id) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return;

  const respuesta = await fetch(new URL(archivo, raizProyecto));
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${archivo}: ${respuesta.status}`);
  }

  contenedor.innerHTML = await respuesta.text();

  if (id === "header") {
    contenedor.querySelectorAll("a[href]").forEach(enlace => {
      const href = enlace.getAttribute("href");
      if (href && !href.startsWith("#")) {
        enlace.href = new URL(href, raizProyecto).href;
      }
    });
  }
}

Promise.all([
  cargarComponente("header.html", "header"),
  cargarComponente("footer.html", "footer"),
]).catch(console.error);