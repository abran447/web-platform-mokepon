function iniciarjuego() {
      let botonMascota= document.getElementById("botonmascota")
      botonMascota.addEventListener("click",SeleccionarMascota)
}

function seleccionarMascotaJugador() {
      alert("seleccionaste Tu Mascota")
}
html.addEventListener("load", iniciarjuego)