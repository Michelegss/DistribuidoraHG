function abrirMenu()
{
    document.getElementById("menu-lateral").style.width = "260px";
    document.getElementById("fondo-menu").style.display = "block";
    document.getElementById("btnCarrito").style.display = "none";
    document.getElementById("btn-mas").style.display = "none";
}

function cerrarMenu() {
    document.getElementById("menu-lateral").style.width = "0";
    document.getElementById("fondo-menu").style.display = "none";
    document.getElementById("btnCarrito").style.display = "";
    document.getElementById("btn-mas").style.display = "";
}