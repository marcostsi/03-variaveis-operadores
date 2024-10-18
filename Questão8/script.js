document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = parseInt(document.getElementById('numero').value);


    let resultado;
    if (numero % 2 === 0) {
        resultado = `O número ${numero} é par.`;
    } else {
        resultado = `O número ${numero} é ímpar.`;
    }

    document.getElementById('resultado').innerText = resultado;
});