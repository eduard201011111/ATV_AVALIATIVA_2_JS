document.addEventListener("DOMContentLoaded", function () {
  let botao = document.getElementById("botao");

  botao.addEventListener("click", function () {
    let entrada = document.getElementById("dataNascimento").value;
    let resultado = document.getElementById("resultado");

    let padrao = /^\d{2}\/\d{2}\/\d{4}$/;

    try {
      if (!padrao.test(entrada)) {
        throw new Error("Formato inválido, Use DD/MM/AAAA.");
      }

      let partes = entrada.split("/");
      let dia = parseInt(partes[0], 10);
      let mes = parseInt(partes[1], 10) - 1;
      let ano = parseInt(partes[2], 10);

      let dataNascimento = new Date(ano, mes, dia);
      let hoje = new Date();

      if (dataNascimento > hoje) {
        throw new Error("Data futura não é válida");
      }

      let idade = hoje.getFullYear() - ano;

      if (
        hoje.getMonth() < mes ||
        (hoje.getMonth() === mes && hoje.getDate() < dia)
      ) {
        idade--;
      }

      resultado.textContent = "Você tem " + idade + " anos";
    } catch (erro) {
      resultado.textContent = "Erro: " + erro.message;
    }
  });
});
