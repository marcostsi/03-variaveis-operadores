document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const raio = parseFloat(document.getElementById("raio").value);
    const area = Math.PI * Math.pow(raio, 2);
    const perimetro = 2 * Math.PI * raio;

    const calculos = `
        Área: ${area.toFixed(2)} <br>
        Perímetro: ${perimetro.toFixed(2)}
    `;
    
document.getElementById('calculos').innerHTML = calculos;
});