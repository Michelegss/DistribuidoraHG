const modal = document.getElementById("modalCompra");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const listaVariantes = document.getElementById("listaVariantes");
const cerrarModal = document.getElementById("cerrarModal");
const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");

    const variantesProducto = {
    "producto0": [
        {    imgGrande: "/images/aguja apple/aguja-apple-caja-abierta.jpg", precio: "18.50" }
    ],
    "producto1": [
        {    imgGrande: "/images/aguja chaquira pony/aguja-chaquira-pony-no-15.jpg", precio: "40.50" },
        {    imgGrande: "", precio: "" }
    ],
    "producto2": [
        {    imgGrande: "/images/aguja circular/aguja-circular-6mm.jpg", precio: "25.50" },
        {    imgGrande: "", precio: "" }
    ],
    "producto3": [
        {    imgGrande: "/images/aguja crochet/aguja-crochet-10.jpg", precio: "50" },
        {    imgGrande: "", precio: "" }
    ],
    "producto4": [
        {    imgGrande: "/images/aguja singer blister de 10/caja-aguja-singer-blister-de-10.jpg", precio: "18.50" },
        {    imgGrande: "", precio: "" }
    ],
    "producto5": [
        {    imgGrande: "images/agujas de crochet aluminio/agujas-de-crochet-aluminio-2.jpg", precio: "30" }
    ],
    "producto6": [
        {    imgGrande: "/images/Agujas de crochet con mango/set-aguja-crochet-con-mango-de-goma-mod-a.jpg", precio: "35" }
    ],
    "producto7": [
        {    imgGrande: "/images/bastidores plasticos con tornillo/bastidor-plastico-con-tornillo-20cms.jpg", precio: "58" }
    ],
    "producto8": [
        {    imgGrande: "/images/Elastico trenzado negro/elastico-trenzado-negro-dertalle.jpg", precio: "15" },
        {    imgGrande: "", precio: "" }
    ],
    "producto9": [
        {    imgGrande: "/images/encaje plisado ps023/encaje-plisado-ps023-verde-limon.jpg", precio: "60" },
        {    imgGrande: "", precio: "" }
    ],
    "producto10": [
        {    imgGrande: "/images/estambres lisos/estambre-gala-liso-no-1jpg", precio: "20" },
        {    imgGrande: "", precio: "" }
    ],
    "producto11": [
        {    imgGrande: "/images/motor/motor-para-maquina-de-coser-cajita.jpg", precio: "100" },
        {    imgGrande: "", precio: "" }
    ],
    "producto12": [
        {    imgGrande: "/images/Rafia toyo/rafia-toyo-lila-no15.jpg", precio: "18" },
        {    imgGrande: "", precio: "" }
    ],
    "producto13": [
        { imgGrande: "/images/set crochet plastico/juego-de-gancho-crochet-plastico-2.jpg", precio: "40" }

    ],
    "producto14": [
        {    imgGrande: "images/tijeras mundial/tijera-mundial-caja.jpg", precio: "80" }
    ],

"producto15": [ {    imgGrande:"/images/tul diamantina/tul-con-diamantina-blanco-rollo.jpg", precio:"150" } ],

"producto16": [ {    imgGrande:"/images/tul doble ancho/tul-doble-ancho-blanco.jpg", precio:"100" } ],

"producto17": [ {    imgGrande:"/images/tul mosquetero tl3/rollos-de-tul-mosquetero-tl3.jpg", precio:"140" } ],

"producto18": [ {    imgGrande:"/images/aguja-chaquira-eagle-caja.jpg", precio:"6" } ],

"producto19": [ {    imgGrande:"/images/alfiler-roseta.jpg", precio:"15" } ],

"producto20": [ {    imgGrande:"/images/despitador-samjung.jpg", precio:"20" } ],

"producto21": [ {    imgGrande:"/images/despitador-samjung.jpg", precio:"18.50" } ],

"producto22": [ {    imgGrande:"/images/aguja apple/aguja-apple-11.jpg", precio:"9.50" } ],

"producto23": [ {    imgGrande:"/images/aguja apple/aguja-apple-14.jpg", precio:"10" } ],

"producto24": [ {    imgGrande:"/images/aguja apple/aguja-apple-16.jpg", precio:"11.50" } ],

"producto25": [ {    imgGrande:"/images/aguja apple/aguja-apple-18.jpg", precio:"12" } ],

"producto26": [ {    imgGrande:"/images/aguja apple/aguja-apple-21.jpg", precio:"14" } ],

"producto27": [ {    imgGrande:"/images/aguja chaquira pony/aguja-chaquira-pony-no-10.jpg", precio:"14.5" } ],

"producto28": [ {    imgGrande:"/images/aguja chaquira pony/aguja-chaquira-pony-no-12.jpg", precio:"14.5" } ],

"producto29": [ {    imgGrande:"/images/aguja chaquira pony/aguja-chaquira-pony-no-15.jpg", precio:"15.50" } ],

"producto30": [ {    imgGrande:"/images/aguja circular/aguja-circular-2.5mm.jpg", precio:"17" } ],

"producto31": [ {    imgGrande:"/images/aguja circular/aguja-circular-3.5mm.jpg", precio:"18" } ],

"producto32": [ {    imgGrande:"/images/aguja circular/aguja-circular-3mm.jpg", precio:"18" } ],

"producto33": [ {    imgGrande:"/images/aguja circular/aguja-circular-4.5mm.jpg", precio:"" } ],

"producto34": [ {    imgGrande:"/images/aguja circular/aguja-circular-4mm.jpg", precio:"" } ],

"producto35": [ {    imgGrande:"/images/aguja circular/aguja-circular-5mm.jpg", precio:"" } ],

"producto36": [ {    imgGrande:"/images/aguja circular/aguja-circular-6mm.jpg", precio:"" } ],

"producto37": [ {    imgGrande:"/images/aguja crochet/aguja-crochet-0.jpg", precio:"" } ],

"producto38": [ {    imgGrande:"/images/aguja crochet/aguja-crochet-2.jpg", precio:"" } ],

"producto39": [ {    imgGrande:"/images/aguja crochet/aguja-crochet-4.jpg", precio:"" } ],

"producto40": [ {    imgGrande:"/images/aguja crochet/aguja-crochet-6.jpg", precio:"" } ],

"producto41": [ {    imgGrande:"/images/aguja crochet/aguja-crochet-8.jpg", precio:"" } ],

"producto42": [ {    imgGrande:"/images/aguja crochet/aguja-crochet-10.jpg", precio:"" } ],

"producto43": [ {    imgGrande:"images2/Rafia toyo/rafia-toyo-amarillo-canario-no-4.jpg", precio:"" } ],

"producto44": [ {    imgGrande:"", precio:"" } ],

"producto45": [ {    imgGrande:"", precio:"" } ],

"producto46": [ {    imgGrande:"", precio:"" } ],

"producto47": [ {    imgGrande:"", precio:"" } ],

"producto48": [ {    imgGrande:"", precio:"" } ],

"producto49": [ {    imgGrande:"", precio:"" } ],

"producto50": [ {    imgGrande:"", precio:"" } ],

"producto51": [ {    imgGrande:"", precio:"" } ],

"producto52": [ {    imgGrande:"", precio:"" } ],

"producto53": [ {    imgGrande:"", precio:"" } ],

"producto54": [ {    imgGrande:"", precio:"" } ],

"producto55": [ {    imgGrande:"", precio:"" } ],

"producto56": [ {    imgGrande:"", precio:"" } ],

"producto57": [ {    imgGrande:"", precio:"" } ],

"producto58": [ {    imgGrande:"", precio:"" } ],

"producto59": [ {    imgGrande:"", precio:"" } ],

"producto60": [ {    imgGrande:"", precio:"" } ],

"producto61": [ {    imgGrande:"", precio:"" } ],

"producto62": [ {    imgGrande:"", precio:"" } ],

"producto63": [ {    imgGrande:"", precio:"" } ],

"producto64": [ {    imgGrande:"", precio:"" } ],

"producto65": [ {    imgGrande:"", precio:"" } ],

"producto66": [ {    imgGrande:"", precio:"" } ],

"producto67": [ {    imgGrande:"", precio:"" } ],

"producto68": [ {    imgGrande:"", precio:"" } ],

"producto69": [ {    imgGrande:"", precio:"" } ],

"producto70": [ {    imgGrande:"", precio:"" } ],

"producto71": [ {    imgGrande:"", precio:"" } ],

"producto72": [ {    imgGrande:"", precio:"" } ],

"producto73": [ {    imgGrande:"", precio:"" } ],

"producto74": [ {    imgGrande:"", precio:"" } ],

"producto75": [ {    imgGrande:"", precio:"" } ],

"producto76": [ {    imgGrande:"", precio:"" } ],

"producto77": [ {    imgGrande:"", precio:"" } ],

"producto78": [ {    imgGrande:"", precio:"" } ],

"producto79": [ {    imgGrande:"", precio:"" } ],

"producto80": [ {    imgGrande:"", precio:"" } ],

"producto81": [ {    imgGrande:"", precio:"" } ],

"producto82": [ {    imgGrande:"", precio:"" } ],

"producto83": [ {    imgGrande:"", precio:"" } ],

"producto84": [ {    imgGrande:"", precio:"" } ],

"producto85": [ {    imgGrande:"", precio:"" } ],

"producto86": [ {    imgGrande:"", precio:"" } ],

"producto87": [ {    imgGrande:"", precio:"" } ],

"producto88": [ {    imgGrande:"", precio:"" } ],

"producto89": [ {    imgGrande:"", precio:"" } ],

"producto90": [ {    imgGrande:"", precio:"" } ],

"producto91": [ {    imgGrande:"", precio:"" } ],

"producto92": [ {    imgGrande:"", precio:"" } ],

"producto93": [ {    imgGrande:"", precio:"" } ],

"producto94": [ {    imgGrande:"", precio:"" } ],

"producto95": [ {    imgGrande:"", precio:"" } ],

};


let productoActual = {
    id: null,
    nombre: null,
    precio: null,
    cantidad: 1,
    variante: null
};


document.querySelectorAll(".tarjeta-producto").forEach(tarjeta => {

    tarjeta.addEventListener("click", () => {

        const id = tarjeta.id;
        const nombre = tarjeta.dataset.nombre;
        const precio = tarjeta.dataset.precio;

        productoActual.id = id;
        productoActual.nombre = nombre;

        const img = tarjeta.querySelector(".imagen-producto img").src;
        modalImg.src = img;

        modalNombre.textContent = nombre;
        modalPrecio.textContent = `Precio: Q. ${precio}`;

        listaVariantes.innerHTML = "";

        if (variantesProducto[id]) {

            variantesProducto[id].forEach((v, index) => {
                const btn = document.createElement("div");
                btn.classList.add("var-opcion");

                btn.innerHTML = `<img src="${v.imgMini}">`;

                if (index === 0) {
                    btn.classList.add("seleccionada");
                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: Q. ${v.precio}`;

                    productoActual.variante = v;
                }


                btn.addEventListener("click", () => {

                    document.querySelectorAll(".var-opcion").forEach(el => el.classList.remove("seleccionada"));
                    btn.classList.add("seleccionada");

                    modalImg.src = v.imgGrande;
                    modalPrecio.textContent = `Precio: Q. ${v.precio}`;
                });

                listaVariantes.appendChild(btn);
            });
        }

        modal.style.display = "flex";
    });
})

btnAgregarCarrito.addEventListener("click", () => {
    
    productoActual.cantidad = parseInt(modalCantidad.value);

    console.log("Producto añadido al carrito:", productoActual);

   

    alert("Producto añadido al carrito ✔");
});



// Cerrar modal
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});