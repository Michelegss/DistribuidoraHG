document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modalCompra");
    const modalImg = document.getElementById("modalImg");
    const modalNombre = document.getElementById("modalNombre");
    const modalPrecio = document.getElementById("modalPrecio");
    const listaVariantes = document.getElementById("listaVariantes");
    const cerrarModal = document.getElementById("cerrarModal");
    const btnAgregarCarrito = document.getElementById("btnAgregarCarrito");
    const selectCantidad = document.getElementById("compraCantidad");
    const inputCantidadPersonalizada = document.getElementById("cantidadPersonalizada");

    const btnCarrito = document.getElementById("btnCarrito");
    const carritoOverlay = document.getElementById("carrito-overlay");
    const carritoPanel = document.getElementById("carrito-panel");
    const cerrarCarrito = document.getElementById("cerrarCarrito");
    const carritoItems = document.getElementById("carrito-items");
    const carritoTotal = document.getElementById("carrito-total");

    
    let productoActual = {
        id: null,
        nombre: null,
        precio: 0,
        cantidad: 1,
        variante: null,
        img: ""
    };

    
    let carrito = [];

   
     
    function abrirCarrito() {
        if (!carritoOverlay || !carritoPanel) return;
        carritoOverlay.style.display = "block";
        setTimeout(() => carritoOverlay.style.opacity = "1", 10);
        carritoPanel.style.right = "0";
        document.getElementById("btnCarrito").style.display = "none";
        document.getElementById("boton-menu").style.display = "none";
        document.getElementById("btn-mas").style.display = "none";
    }

    function cerrarCarritoFn() {
        if (!carritoOverlay || !carritoPanel) return;
        carritoOverlay.style.opacity = "0";
        carritoPanel.style.right = "-350px";
        setTimeout(() => carritoOverlay.style.display = "none", 300);
        document.getElementById("btnCarrito").style.display = "";
        document.getElementById("boton-menu").style.display = ""
        document.getElementById("btn-mas").style.display = "";
    }


    if (btnCarrito) btnCarrito.addEventListener("click", abrirCarrito);
    if (cerrarCarrito) cerrarCarrito.addEventListener("click", cerrarCarritoFn);
    if (carritoOverlay) carritoOverlay.addEventListener("click", cerrarCarritoFn);

 
    document.querySelectorAll(".tarjeta-producto").forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const id = tarjeta.id || tarjeta.dataset.id;
            const nombre = tarjeta.querySelector(".titulo") ? tarjeta.querySelector(".titulo").textContent : (tarjeta.dataset.nombre || "Producto");
            const precioData = tarjeta.dataset.precio || tarjeta.dataset.precioDefault || null;

            productoActual.id = id;
            productoActual.nombre = nombre;
            productoActual.precio = precioData ? parseFloat(precioData) : 0;

          
            const imgEl = tarjeta.querySelector(".imagen-producto img");
            if (imgEl && imgEl.src) {
                modalImg.src = imgEl.src;
                productoActual.img = imgEl.src;
            } else {
                modalImg.src = ""; 
                productoActual.img = "";
            }
            modalNombre.textContent = nombre;
            modalPrecio.textContent = productoActual.precio ? `Precio: Q${productoActual.precio}` : "Precio: -";

            // Reset cantidad
            if (selectCantidad) {
                selectCantidad.value = "1";
                inputCantidadPersonalizada.style.display = "none";
                inputCantidadPersonalizada.value = "";
            }
            productoActual.cantidad = 1;

            listaVariantes.innerHTML = "";
            if (id && variantesProducto[id]) {
                variantesProducto[id].forEach((v, index) => {
                    const btn = document.createElement("div");
                    btn.className = "var-opcion";
                    btn.innerHTML = `<img src="${v.imgMini}" alt="var-${index}" />`;
                    
                    if (index === 0) {
                        btn.classList.add("seleccionada");
                        modalImg.src = v.imgGrande || v.imgMini;
                        modalPrecio.textContent = `Precio: Q${v.precio.toFixed(2)}`;
                        productoActual.variante = v;
                        productoActual.precio = v.precio;
                        productoActual.img = v.imgMini || v.imgGrande || productoActual.img;
                    }
                    btn.addEventListener("click", () => {
                        document.querySelectorAll(".var-opcion").forEach(el => el.classList.remove("seleccionada"));
                        btn.classList.add("seleccionada");
                        modalImg.src = v.imgGrande || v.imgMini;
                        modalPrecio.textContent = `Precio: Q${v.precio.toFixed(2)}`;
                        productoActual.variante = v;
                        productoActual.precio = v.precio;
                        productoActual.img = v.imgMini || v.imgGrande || productoActual.img;
                    });
                    listaVariantes.appendChild(btn);
                });
            } else {
              
                productoActual.variante = null;
                if (productoActual.precio) modalPrecio.textContent = `Precio: Q${productoActual.precio.toFixed ? productoActual.precio.toFixed(2) : productoActual.precio}`;
            }

            // Mostrar modal
            if (modal) modal.style.display = "flex";
        });
    });

  
    if (selectCantidad) {
        selectCantidad.addEventListener("change", () => {
            if (selectCantidad.value === "custom") {
                inputCantidadPersonalizada.style.display = "block";
                inputCantidadPersonalizada.focus();
            } else {
                inputCantidadPersonalizada.style.display = "none";
            }
        });
    }

  
    if (btnAgregarCarrito) {
        btnAgregarCarrito.addEventListener("click", () => {
            
            let cantidad = 1;
            if (selectCantidad) {
                if (selectCantidad.value === "custom" && inputCantidadPersonalizada) {
                    const val = parseInt(inputCantidadPersonalizada.value);
                    cantidad = (Number.isInteger(val) && val > 0) ? val : 1;
                } else {
                    cantidad = parseInt(selectCantidad.value) || 1;
                }
            } else {
                cantidad = 1;
            }

            productoActual.cantidad = cantidad;

          
            const precioFinal = productoActual.variante ? productoActual.variante.precio : productoActual.precio || 0;
            const imgParaCarrito = productoActual.img || (productoActual.variante && productoActual.variante.imgMini) || "";

            const nuevoItem = {
                id: productoActual.id,
                titulo: productoActual.nombre,
                precio: Number(precioFinal),
                cantidad: Number(productoActual.cantidad),
                img: imgParaCarrito
            };

           
            const existenteIndex = carrito.findIndex(it => it.id === nuevoItem.id && it.precio === nuevoItem.precio);
            if (existenteIndex > -1) {
                carrito[existenteIndex].cantidad += nuevoItem.cantidad;
            } else {
                carrito.push(nuevoItem);
            }

            actualizarCarrito();
            modal.style.display = "none";
            abrirCarrito();
        });
    }

    
    if (cerrarModal) {
        cerrarModal.addEventListener("click", () => {
            if (modal) modal.style.display = "none";
        });
    }

  
    function actualizarCarrito() {
        if (!carritoItems || !carritoTotal) return;

        carritoItems.innerHTML = "";
        let total = 0;

        carrito.forEach((item, i) => {
            total += item.precio * item.cantidad;

            const div = document.createElement("div");
            div.className = "carrito-item";

            div.innerHTML = `
                <div style="display:flex; gap:10px; align-items:center;">
                    ${item.img ? `<img src="${item.img}" alt="${item.titulo}" style="width:56px;height:56px;object-fit:cover;border-radius:6px;">` : ""}
                    <div style="min-width:140px;">
                        <strong style="display:block;">${item.titulo}</strong>
                        <small>Cantidad: ${item.cantidad}</small>
                        <div style="font-weight:700; margin-top:4px;">Q${(item.precio * item.cantidad).toFixed(2)}</div>
                    </div>
                </div>
                <div>
                    <button class="carrito-eliminar" data-index="${i}" aria-label="Eliminar item">✕</button>
                </div>
            `;

            carritoItems.appendChild(div);
        });

        carritoTotal.textContent = "Q" + total.toFixed(2);

        document.querySelectorAll(".carrito-eliminar").forEach(btn => {
            btn.addEventListener("click", () => {
                const idx = parseInt(btn.getAttribute("data-index"));
                if (!isNaN(idx)) {
                    carrito.splice(idx, 1);
                    actualizarCarrito();
                }
            });
        });
    }

    const btnIrAPagar = document.querySelector(".carrito-pagar");

if (btnIrAPagar) {
    btnIrAPagar.addEventListener("click", () => {

        let total = 0;
        carrito.forEach(item => {
            total += item.precio * item.cantidad;
        });

        
        localStorage.setItem("totalCompra", total.toFixed(2));

        
        window.location.href = "form_compra.html";
    });
}   
}); 
