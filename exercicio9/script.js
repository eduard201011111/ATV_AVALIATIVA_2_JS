let alunos = [];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("adicionar").addEventListener("click", adicionarAluno);
  document.getElementById("ordenar").addEventListener("click", ordenarAlunos);
  document.getElementById("pesquisa").addEventListener("input", buscarAluno);
});

function validar(cpf, nome, nascimento, telefone, email) {
  let erros = [];

  if (!/^\d{2}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) erros.push("CPF inválido");
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) erros.push("Nome inválido");
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(nascimento)) erros.push("Data inválida");
  if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) erros.push("Telefone inválido");
  if (!/^[\w\.-]+@(gmail|hotmail|outlook)\.(com|com\.br|org)$/.test(email)) erros.push("Email inválido");

  return erros;
}

function adicionarAluno() {
  let cpf = document.getElementById("cpf").value.trim();
  let nome = document.getElementById("nome").value.trim();
  let nascimento = document.getElementById("nascimento").value.trim();
  let telefone = document.getElementById("telefone").value.trim();
  let email = document.getElementById("email").value.trim();
  let curso = document.getElementById("curso").value.trim();

  let erros = validar(cpf, nome, nascimento, telefone, email);
  if (erros.length > 0) {
    alert(erros.join("\n"));
    return;
  }

  let index = alunos.findIndex(a => a.cpf === cpf || a.email === email);
  if (index !== -1) {
    alunos[index] = { cpf, nome, nascimento, telefone, email, curso };
  } else {
    if (alunos.some(a => a.cpf === cpf || a.email === email)) {
      alert("CPF ou e-mail já existe");
      return;
    }
    alunos.push({ cpf, nome, nascimento, telefone, email, curso });
  }

  limparCampos();
  exibirAlunos();
}

function exibirAlunos(lista = alunos) {
  let div = document.getElementById("resultado");
  div.innerHTML = "";

  lista.forEach((a, i) => {
    let p = document.createElement("p");
    p.innerHTML = `${a.nome} - ${a.curso}<br>
      CPF: ${a.cpf} | Nasc: ${a.nascimento} | Tel: ${a.telefone} | Email: ${a.email}
      <button data-i="${i}" class="editar">Editar</button>
      <button data-i="${i}" class="excluir">Excluir</button>`;
    div.appendChild(p);
  });

  document.querySelectorAll(".editar").forEach(btn => {
    btn.onclick = () => editarAluno(btn.dataset.i);
  });
  document.querySelectorAll(".excluir").forEach(btn => {
    btn.onclick = () => excluirAluno(btn.dataset.i);
  });
}

function editarAluno(i) {
  let a = alunos[i];
  document.getElementById("cpf").value = a.cpf;
  document.getElementById("nome").value = a.nome;
  document.getElementById("nascimento").value = a.nascimento;
  document.getElementById("telefone").value = a.telefone;
  document.getElementById("email").value = a.email;
  document.getElementById("curso").value = a.curso;
}

function excluirAluno(i) {
  alunos.splice(i, 1);
  exibirAlunos();
}

function buscarAluno() {
  let termo = document.getElementById("pesquisa").value.toLowerCase();
  let filtrados = alunos.filter(a => a.nome.toLowerCase().includes(termo));
  exibirAlunos(filtrados);
}

function ordenarAlunos() {
  alunos.sort((a, b) => a.nome.localeCompare(b.nome));
  exibirAlunos();
}

function limparCampos() {
  ["cpf", "nome", "nascimento", "telefone", "email", "curso"].forEach(id => {
    document.getElementById(id).value = "";
  });
}
