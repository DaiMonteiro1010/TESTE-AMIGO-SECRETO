//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nome = "";

//salvar nome
function salvarNome() {
   nome = document.getElementById("nome").value;
    if (nome == "") {
        alert("Por favor, insira um nome válido");
    } else {
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}
//lista de amigos vazia
let listaDeAmigos = [];

//adicionar amigo na lista
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome válido");
    } else {
        listaDeAmigos.push(nomeAmigo);
        document.getElementById("amigo").value ="";
        atualizarLista();
    }
}
//atualizar a lista de amigos
function atualizarLista() {
    let listaAtualizada = document.getElementById("listaAmigos");
    listaAtualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaAtualizada.appendChild(itemLista);

//sortear amigo e não sortear seu próprio nome
function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Por favor, insira um nome válido");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos[indiceAleatorio];
    if (nomeSorteado == nome) {
        alert("Você não pode ser seu próprio amigo secreto! Tente novamente");
        return;
    }

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;

}  
function reiniciarSorteio() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}