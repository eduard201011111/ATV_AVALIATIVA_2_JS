document.addEventListener("DOMContentLoaded", () => {
  const frutas = [
    { nome: "Banana", imagem: "frutas/banana.jpg", descricao: "Banana é rica em potássio." },
    { nome: "Maçã", imagem: "frutas/maca.jpg", descricao: "Maçã ajuda na digestão." },
    { nome: "Laranja", imagem: "frutas/laranja.jpg", descricao: "Laranja é fonte de vitamina C." }
  ];

  let body = document.body;

  let titulo = document.createElement("h2");
  titulo.textContent = "Escolha uma fruta:";
  body.appendChild(titulo);

  let select = document.createElement("select");
  select.id = "seletor";
  let optionDefault = document.createElement("option");
  optionDefault.text = "-- selecione --";
  optionDefault.disabled = true;
  optionDefault.selected = true;
  select.appendChild(optionDefault);
  frutas.forEach(f => {
    let op = document.createElement("option");
    op.value = f.nome;
    op.textContent = f.nome;
    select.appendChild(op);
  });
  body.appendChild(select);

  let img = document.createElement("img");
  img.style.maxWidth = "200px";
  img.alt = "Imagem da fruta";
  body.appendChild(img);

  let texto = document.createElement("p");
  texto.id = "descricao";
  body.appendChild(texto);

  select.addEventListener("change", async () => {
    let frutaSelecionada = frutas.find(f => f.nome === select.value);
    if (frutaSelecionada) {
      let novaImg = new Image();
      novaImg.src = frutaSelecionada.imagem;

      try {
        await novaImg.decode(); // garante que carregou
        img.src = novaImg.src;
        texto.textContent = frutaSelecionada.descricao;
      } catch (e) {
        texto.textContent = "Erro ao carregar imagem.";
        img.src = "";
      }
    }
  });
});
