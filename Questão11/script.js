document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    let calculos;
    if (numero1 > numero2) {
        calculos = `O número ${numero1} é maior que o número ${numero2}.`;
    } else if (numero1 < numero2) {
        calculos = `O número ${numero1} é menor que o número ${numero2}.`;
    } else {
        calculos = `Os números ${numero1} e ${numero2} são iguais.`;
    }

    document.getElementById('calculos').innerText = calculos;
});