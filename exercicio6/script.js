document.addEventListener("DOMContentLoaded", function () {
  let botao = document.getElementById("botao");

  botao.addEventListener("click", function () {
    let entrada = document.getElementById("entrada").value;
    let resultado = document.getElementById("resultado");

    if (entrada.trim() === "") {
      resultado.textContent = "Digite algum texto.";
      return;
    }

    if (entrada.length > 70) {
      resultado.textContent = "Muito Grande, O Máximo é 70 caracteres.";
    } else {
      resultado.textContent = "Texto válido com " + entrada.length + " caracteres.";
    }
  });
});
