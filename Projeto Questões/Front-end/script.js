// QUESTÕES

const questions = [
    {
        enunciado: "Quantos átomos há na molécula de água?",
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        gabarito: "C"
    },
    {
        enunciado: "Quantos átomos há na molécula de ácido sulfúrico?",
        A: "4",
        B: "5",
        C: "6",
        D: "7",
        gabarito: "D"
    },
    {
        enunciado: "Quantos átomos há na molécula de gás oxigênio?",
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        gabarito: "B"
    }
]

const botao_resposta = document.getElementById("sent_answer");
const alternativas = document.getElementsByName("options"); //busca todas as alternativas (selecionadas ou não)
const resultado = document.getElementById("resultado"); //pega o <p> para exibir resposta
const reiniciar = document.getElementById("try_again")

botao_resposta.addEventListener("click", function(){
    let resposta_selecionada = null;
    for (const alternativa of alternativas) {
        if (alternativa.checked) {
            resposta_selecionada = alternativa.value;   
        }} //confere qual alternativa foi selecionada

    if (resposta_selecionada === null) {
        resultado.textContent = "Selecione uma alternativa!";
        return;} //verifica se houve seleção, caso contrário, encerra a função (return)

    verificar_resposta(resposta_selecionada)
    //corrige

    for (const alternativa of alternativas){
        alternativa.disabled = true
    } //desabilita as alternativas

    botao_resposta.disabled = true //desativa o botao
    })

function verificar_resposta(value) {
    if (value === "C"){
        resultado.textContent = "Parabéns, você acertou!";
    } else {
        resultado.textContent = "Infelizmente você errou.";
    }
}

reiniciar.addEventListener("click", function(){
    botao_resposta.disabled = false
    resultado.textContent = ""
    for (const alternativa of alternativas){
        alternativa.disabled = false
        alternativa.checked = false
    }
})
