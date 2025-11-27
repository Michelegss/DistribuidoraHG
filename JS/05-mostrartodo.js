document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("productos");
    const btnMostrar = document.getElementById("btn-mas");

    
    const cantidadInicial = 8;

    
    const productos = Array.from(contenedor.querySelectorAll(".tarjeta-producto"));

    
    productos.forEach(p => p.style.display = "none");

    
    function mostrarInicial() {
        for (let i = 0; i < cantidadInicial && i < productos.length; i++) {
            productos[i].style.display = "block";
        }
    }


    function mostrarTodos() {
        productos.forEach(p => p.style.display = "block");
        btnMostrar.textContent = "Ocultar ▼";
        btnMostrar.dataset.state = "abierto";
    }

    
    function ocultarDeNuevo() {
        productos.forEach((p, i) => {
            if (i < cantidadInicial) p.style.display = "block";
            else p.style.display = "none";
        });
        btnMostrar.textContent = "Mostrar todos ▼";
        btnMostrar.dataset.state = "cerrado";
    }

    
    btnMostrar.addEventListener("click", () => {
        if (btnMostrar.dataset.state === "abierto") {
            ocultarDeNuevo();
        } else {
            mostrarTodos();
        }
    });

    
    const indiceMitad = Math.floor(cantidadInicial / 2); 
    const productoMitad = productos[indiceMitad];

    function detectarMitad() {
        const rect = productoMitad.getBoundingClientRect();
        const ventana = window.innerHeight;


        if (rect.top < ventana && rect.bottom > 0) {
            btnMostrar.style.opacity = "1";
            btnMostrar.style.pointerEvents = "auto";
        }
    }

    
    btnMostrar.style.opacity = "0";
    btnMostrar.style.pointerEvents = "none";
    btnMostrar.dataset.state = "cerrado";

    
    window.addEventListener("scroll", detectarMitad);

    
    mostrarInicial();
    
    mostrarInicial();
});

const contenedor = document.getElementById("productos");
const btnMas = document.getElementById("btn-mas");
const footer = document.getElementById("footer");


let cantidadMostrada = 8;


function ajustarBoton() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop <= windowHeight) {
        btnMas.classList.add("stop");
        btnMas.style.bottom = (windowHeight - footerTop + 20) + "px";
    } else {
        btnMas.classList.remove("stop");
        btnMas.style.bottom = "20px";
    }
    }

window.addEventListener("scroll", ajustarBoton);
window.addEventListener("resize", ajustarBoton);