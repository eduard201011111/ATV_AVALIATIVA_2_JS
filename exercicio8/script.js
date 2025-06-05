document.addEventListener("DOMContentLoaded", function () {
  let botao = document.getElementById("sortear");

  botao.addEventListener("click", function () {
    let entrada = document.getElementById("nomes").value;
    let resultado = document.getElementById("resultado");

    if (entrada.trim() === "") {
      resultado.textContent = "Digite os nomes.";
      return;
    }

    let nomes = entrada.split(",").map(n => n.trim());
    let regex = /^[A-Za-zÀ-ÿ\s]+$/;
    let usados = new Set();

    for (let nome of nomes) {
      if (!regex.test(nome)) {
        resultado.textContent = "Nomes inválidos.";
        return;
      }
      if (usados.has(nome.toLowerCase())) {
        resultado.textContent = "Nomes repetidos.";
        return;
      }
      usados.add(nome.toLowerCase());
    }

    if (nomes.length % 2 !== 0) {
      resultado.textContent = "Digite pares de nomes.";
      return;
    }

    for (let i = nomes.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
    }

    let texto = "";
    for (let i = 0; i < nomes.length; i += 2) {
      texto += nomes[i] + " & " + nomes[i + 1] + "<br>";
    }
    resultado.innerHTML = texto;
  });
});
