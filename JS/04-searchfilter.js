
document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    filtrar();
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaURL = urlParams.get("categoria");

    if (categoriaURL) {
        const selectCategoria = document.getElementById("categoria");

        
        selectCategoria.value = categoriaURL;

    
        if (typeof filtrar === "function") {
            filtrar();
        }
    }
});

function filtrar() {
    let texto = document.getElementById("filtro").value.toLowerCase();
    let categoriaSeleccionada = document.getElementById("categoria").value;
    let ordenPrecio = document.getElementById("precio").value;

    let contenedor = document.getElementById("productos");
    let tarjetas = Array.from(document.querySelectorAll(".tarjeta-producto"));


    tarjetas.forEach(card => {
        let titulo = card.querySelector("h3.titulo").textContent.toLowerCase();

        let categoriasCard = card
            .getAttribute("data-categoria")
            .toLowerCase()
            .split(",")
            .map(c => c.trim());

        let coincideTexto = titulo.includes(texto);
        let coincideCategoria =
            categoriaSeleccionada === "todas" ||
            categoriasCard.includes(categoriaSeleccionada);

        if (coincideTexto && coincideCategoria) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    
    if (ordenPrecio !== "default") {
        let visibles = tarjetas.filter(card => card.style.display !== "none");

        visibles.sort((a, b) => {
            let A = parseFloat(a.getAttribute("data-precio"));
            let B = parseFloat(b.getAttribute("data-precio"));

            if (ordenPrecio === "asc") return A - B;
            if (ordenPrecio === "desc") return B - A;
        });

        visibles.forEach(card => contenedor.appendChild(card));
    }
}