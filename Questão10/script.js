document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();


    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;

    const calculos = (string1 === string2) 
        ? 'As strings são iguais.' 
        : 'As strings são diferentes.';

    document.getElementById('calculos').innerText = calculos;
});