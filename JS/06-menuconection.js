function buscarDesdeMenu(texto) {
    const inputFiltro = document.getElementById("filtro");
    const selectCategoria = document.getElementById("categoria");

    
    inputFiltro.value = texto.toLowerCase();

    
    selectCategoria.value = "todas";

    
    if (typeof filtrar === "function") {
        filtrar();
    }

    
    const lista = document.getElementById("productos");
    if (lista) {
        lista.scrollIntoView({ behavior: "smooth" });
    }

    
    if (typeof cerrarMenu === "function") {
        cerrarMenu();
    }
}