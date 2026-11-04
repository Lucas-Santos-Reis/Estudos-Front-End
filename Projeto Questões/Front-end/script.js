const botao_resposta = document.getElementById("sent_answer")
const alternativas = document.getElementsByName("options")
botao_resposta.onclick = function() {
console.log("click", alternativas)
}