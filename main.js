const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const resultado = document.getElementById("resultado");

document.getElementById("soma").addEventListener("click", soma);
document.getElementById("subtracao").addEventListener("click", subtracao);
document.getElementById("divisao").addEventListener("click", divisao);
document.getElementById("multiplicacao").addEventListener("click", multiplicacao);

function soma(){
    if (n1.value === "" || n2.value === "") {
        alert("Por favor, insira valores nos dois campos.");
        return;
    }
    const calculo = parseFloat(n1.value) + parseFloat(n2.value);
    resultado.textContent = calculo;
}

function subtracao(){
    if (n1.value === "" || n2.value === "") {
        alert("Por favor, insira valores nos dois campos.");
        return;
    }
    const calculo = parseFloat(n1.value) - parseFloat(n2.value);
    resultado.textContent = calculo;
}

function divisao(){
    if (n1.value === "" || n2.value === "") {
        alert("Por favor, insira valores nos dois campos.");
        return;
    }
    const calculo = parseFloat(n1.value) / parseFloat(n2.value);
    resultado.textContent = calculo;
}

function multiplicacao(){
    if (n1.value === "" || n2.value === "") {
        alert("Por favor, insira valores nos dois campos.");
        return;
    }
    const calculo = parseFloat(n1.value) * parseFloat(n2.value);
    resultado.textContent = calculo;
}

const nomeInput = document.getElementById("nome");
const saudacao = document.getElementById("saudacao");
const confirmarNomeBtn = document.getElementById("confirmarNome");

confirmarNomeBtn.addEventListener("click", function() {
    if (nomeInput.value === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    const nome = nomeInput.value;
    saudacao.textContent = `Olá mundo, ${nome}`;
});
