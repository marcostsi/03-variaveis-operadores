document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 / numero2;

    const calculos = `
    Soma: ${soma} <br>
    Subtração: ${subtracao} <br>
    Multiplicação: ${multiplicacao} <br>
    Divisão: ${divisao}
`;

document.getElementById('calculos').innerHTML = calculos;
});
