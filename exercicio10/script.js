let frutas = [
  { nome: "Maçã", arquivo: "maca.png" },
  { nome: "Banana", arquivo: "banana.png" },
  { nome: "Uva", arquivo: "uva.png" }
];

async function carregarImagemComoBase64(nomeArquivo) {
  let response = await fetch(`frutas/${nomeArquivo}`);
  
}

async function criarInterface() {
  let app = document.getElementById("app");

    let botao = document.createElement("button");
    botao.innerText = fruta.nome;

    botao.addEventListener("click", async () => {
     
      imagem.src = base64;
      descricao.innerText = `Você escolheu: ${fruta.nome}`;
    });

    botoesContainer.appendChild(botao);
  }

criarInterface();
