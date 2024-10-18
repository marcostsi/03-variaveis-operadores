document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const salarioMensal = parseFloat(document.getElementById("salario").value);
    const mesesTrabalhados = parseFloat(document.getElementById("meses").value);

    const salarioAnual = salarioMensal * mesesTrabalhados;

    const calculos = `O seu salário anual é: R$${salarioAnual.toFixed(2)}`
    
document.getElementById('calculos').innerText = calculos;
});