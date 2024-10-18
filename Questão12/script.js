document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const idade = parseInt(document.getElementById('idade').value);

   
    const calculos = (idade >= 18) 
        ? 'Você é maior de idade.' 
        : 'Você é menor de idade.';

    document.getElementById('calculos').innerText = calculos;
});