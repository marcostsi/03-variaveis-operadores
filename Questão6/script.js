document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;

    const calculos = `A temperatura em Fahrenheit é: ${fahrenheit.toFixed(2)}°F`;
    
document.getElementById('calculos').innerText = calculos;
});