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

