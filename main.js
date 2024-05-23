const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const resultado = document.getElementById("resultado");

document.getElementById("soma").addEventListener("click", soma);
document.getElementById("subtracao").addEventListener("click", subtracao);

function soma(){
    const calculo = parseFloat(n1.value) + parseFloat(n2.value);
    resultado.textContent = calculo;
}

function subtracao(){
    const calculo = parseFloat(n1.value) - parseFloat(n2.value);
    resultado.textContent = calculo;
}