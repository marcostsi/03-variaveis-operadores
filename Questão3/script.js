document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    document.getElementById("meuFormulario").remove();

    const mensagem = `Bem-vindo, ${nome}! Você tem ${idade} anos.`;
    document.getElementById('mensagem').innerText = mensagem;
});



 