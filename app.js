// Arreglo amigos para almacenar los nombres ingresados
let amigos = [];
//Funcion donde agregaremos amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    //Eliminacion de espacios por si pasan errores
    let nombre = input.value.trim();
    //condicion para no agregar nada vacio
    if (nombre === "") {
        alert("El campo está vacio. Por favor, ingresa un nombre.");
        return;
    }

    //Agregando los nombres
    amigos.push(nombre);

    //Mostrar el nombre en pantalla
    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    // Limpiar el input después de agregar
    input.value = "";
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
}
