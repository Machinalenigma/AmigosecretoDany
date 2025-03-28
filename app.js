// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un Nombre");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
}

function actualizarLista() {
    const listaAmigoll = document.getElementById("listaAmigos");
    listaAmigoll.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoll.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadol1 = document.getElementById("resultado");
    resultadol1.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAdd").addEventListener("click", agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});