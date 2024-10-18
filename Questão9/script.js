document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const booleano1 = document.getElementById('booleano1').value.toLowerCase() === 'true';
    const booleano2 = document.getElementById('booleano2').value.toLowerCase() === 'true';


    const andResultado = booleano1 && booleano2;
    const orResultado = booleano1 || booleano2;
    const notResultado1 = !booleano1;
    const notResultado2 = !booleano2;

    const resultados = `
        ${booleano1} AND ${booleano2} = ${andResultado} <br>
        ${booleano1} OR ${booleano2} = ${orResultado} <br>
        NOT ${booleano1} = ${notResultado1} <br>
        NOT ${booleano2} = ${notResultado2}
    `;
    
    document.getElementById('resultados').innerHTML = resultados;
});